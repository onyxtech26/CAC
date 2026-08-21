import { useEffect, useState } from "react";
import { LogoMark } from "./ui";

export default function SplashScreen() {
  const [visible, setVisible] = useState(() => {
    return sessionStorage.getItem("cac_splash_shown") !== "true";
  });
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const fadeTimer = setTimeout(() => setFading(true), 1600);
    const hideTimer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("cac_splash_shown", "true");
    }, 2200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink transition-opacity duration-700 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute h-96 w-96 rounded-full blur-3xl anim-float-slow glow-gold"
      />
      <div
        className="pointer-events-none absolute h-[30rem] w-[30rem] rounded-full blur-3xl glow-gold"
      />

      <div className="relative z-10 flex flex-col items-center text-center px-5">
        <div className="relative grid place-items-center">
          <LogoMark size={90} className="anim-float" />
          <span
            className="absolute inset-0 rounded-full border border-gold-2/40"
            style={{ animation: "pulse-ring 2.5s ease-out infinite" }}
          />
        </div>

        <h1 className="mt-6 font-display text-2xl font-bold tracking-wider text-ivory sm:text-3xl">
          CONGLOMERATE APPRAISAL
        </h1>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.3em] text-gold-2/90">
          PROPERTY FORENSIC CONSULTATION
        </p>

        <div className="mt-6 h-0.5 w-36 overflow-hidden rounded-full bg-navy-2">
          <div className="h-full w-full bg-gradient-to-r from-gold-3 via-gold-2 to-gold-3 anim-sheen" />
        </div>
      </div>
    </div>
  );
}
