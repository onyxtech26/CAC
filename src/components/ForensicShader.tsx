import { useEffect, useRef } from 'react';

export default function ForensicShader() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrameId: number;
    let gl: WebGLRenderingContext | null = null;

    try {
      gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') as WebGLRenderingContext | null;
    } catch (e) {
      console.warn("WebGL not supported, falling back to static grid", e);
    }

    if (!gl) {
      // Fallback behavior if WebGL is not available
      return;
    }

    const vsSource = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      varying vec2 v_texCoord;

      // Pseudo-random noise
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }

      // Architectural block pattern (Floor plans)
      float blockPattern(vec2 uv, float t) {
        vec2 id = floor(uv);
        vec2 local = fract(uv);
        
        float n = hash(id);
        float pattern = 0.0;
        
        // Only place buildings on some grid cells
        if (n > 0.3) {
           // Animate the building drawing process slowly
           float anim = smoothstep(0.0, 1.0, sin(t + n * 10.0) * 0.5 + 0.5);
           
           // Generate a pseudo-random size for the building footprint
           vec2 size = vec2(0.4 + 0.4 * hash(id + 1.0), 0.4 + 0.4 * hash(id + 2.0)) * anim;
           
           // Signed distance to the box
           vec2 d = abs(local - 0.5) - size * 0.5;
           float dist = length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
           
           // Draw outline (walls)
           pattern += smoothstep(0.03, 0.01, abs(dist));
           
           // Draw inner fill (floor area)
           pattern += smoothstep(0.0, -0.01, dist) * 0.15;
           
           // Sometimes add a central core (like an elevator shaft or courtyard)
           if (hash(id + 3.0) > 0.5) {
             vec2 coreSize = size * 0.3;
             vec2 cd = abs(local - 0.5) - coreSize * 0.5;
             float cDist = length(max(cd, 0.0)) + min(max(cd.x, cd.y), 0.0);
             pattern += smoothstep(0.02, 0.01, abs(cDist));
             
             // Optional structural cross inside core
             if(hash(id + 4.0) > 0.5 && cDist < 0.0){
                float crossLines = max(smoothstep(0.01, 0.005, abs(local.x - 0.5)), smoothstep(0.01, 0.005, abs(local.y - 0.5)));
                pattern += crossLines * 0.5;
             }
           }
        }
        
        return pattern;
      }

      void main() {
        // Map v_texCoord (0..1) to physical aspect ratio to keep grids perfectly square on mobile/desktop
        vec2 aspect = u_resolution / min(u_resolution.x, u_resolution.y);
        vec2 uv = v_texCoord * aspect;
        
        // Base color: Premium soft ivory-white
        vec3 color = vec3(0.980, 0.984, 0.988);
        
        // Scale the grid so there are ~8 cells on the shortest side
        float scale = 8.0;
        
        // Panning the camera slowly across the blueprint
        vec2 gridUv = uv * scale + vec2(u_time * 0.05, -u_time * 0.03);
        
        // Primary blueprint grid (Main structural grid)
        vec2 grid = abs(fract(gridUv) - 0.5) * 2.0;
        float lines = max(smoothstep(0.96, 0.98, grid.x), smoothstep(0.96, 0.98, grid.y));
        
        // Secondary subdivision grid (finer measurement lines)
        vec2 fineGrid = abs(fract(gridUv * 5.0) - 0.5) * 2.0;
        float fineLines = max(smoothstep(0.95, 0.98, fineGrid.x), smoothstep(0.95, 0.98, fineGrid.y));
        
        // Tertiary grid for technical precision feel
        vec2 microGrid = abs(fract(gridUv * 10.0) - 0.5) * 2.0;
        float microLines = max(smoothstep(0.9, 0.98, microGrid.x), smoothstep(0.9, 0.98, microGrid.y));
        
        // Generate architectural floor plans
        float buildings = blockPattern(gridUv, u_time * 0.4);
        float buildingsGold = blockPattern(gridUv * 0.5 + vec2(15.2, 7.3), u_time * 0.25);
        
        // Brand colors (Navy & Gold)
        vec3 navy = vec3(0.118, 0.227, 0.541);
        vec3 gold = vec3(0.792, 0.541, 0.015);
        
        // Apply grids to canvas
        color = mix(color, navy, microLines * 0.015);
        color = mix(color, navy, fineLines * 0.03);
        color = mix(color, navy, lines * 0.06);
        
        // Apply animated buildings
        color = mix(color, navy, buildings * 0.15);
        color = mix(color, gold, buildingsGold * 0.12);
        
        // Add a subtle vignette shading to focus the center
        float vignette = distance(v_texCoord, vec2(0.5));
        color -= vignette * 0.04;
        
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    function compileShader(source: string, type: number): WebGLShader | null {
      const shader = gl!.createShader(type);
      if (!shader) return null;
      gl!.shaderSource(shader, source);
      gl!.compileShader(shader);
      if (!gl!.getShaderParameter(shader, gl!.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl!.getShaderInfoLog(shader));
        gl!.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = compileShader(vsSource, gl.VERTEX_SHADER);
    const fs = compileShader(fsSource, gl.FRAGMENT_SHADER);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const posAttr = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(posAttr);
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'u_time');
    const uRes = gl.getUniformLocation(program, 'u_resolution');

    function resizeCanvas() {
      if (!canvas || !gl) return;
      const rect = canvas.getBoundingClientRect();
      const width = Math.floor(rect.width) || window.innerWidth;
      const height = Math.floor(rect.height) || window.innerHeight;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function render(time: number) {
      if (!gl) return;
      gl.uniform1f(uTime, time * 0.001);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    }

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      if (gl) {
        gl.deleteBuffer(buffer);
        gl.deleteProgram(program);
        gl.deleteShader(vs);
        gl.deleteShader(fs);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ display: 'block', zIndex: 1 }}
    />
  );
}
