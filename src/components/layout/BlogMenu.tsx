import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CalendarDays, Clock, ArrowRight, X, Newspaper } from 'lucide-react';
import { BLOG_POSTS } from '../../data/blog';
import { BlogPost } from '../../types';
import { lockScroll, unlockScroll } from '../../lib/scrollLock';
import BlogReaderModal from '../ui/BlogReaderModal';

interface BlogMenuProps {
  open: boolean;
  onClose: () => void;
}

/**
 * The blog "hanging" panel — drops down from under the navbar with an
 * animation and lets visitors browse and read posts inline.
 */
export default function BlogMenu({ open, onClose }: BlogMenuProps) {
  const posts = BLOG_POSTS;
  const [selected, setSelected] = useState<BlogPost | null>(null);

  // Lock page scroll + ESC to close whenever the panel opens.
  useEffect(() => {
    if (!open) return;
    lockScroll();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      unlockScroll();
    };
  }, [open, onClose]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <>
            {/* Click-away catcher */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[2px]"
            />

            {/* The hanging panel */}
            <motion.div
              initial={{ opacity: 0, y: -14, scaleY: 0.94 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -14, scaleY: 0.94, transition: { duration: 0.18, ease: 'easeIn' } }}
              transition={{ type: 'spring', damping: 24, stiffness: 240 }}
              style={{ transformOrigin: 'top center' }}
              className="fixed top-[92px] left-1/2 -translate-x-1/2 w-[95%] max-w-4xl z-50 bg-white/90 backdrop-blur-2xl border border-black/10 shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-black/10 bg-white/60">
                <div className="flex items-center gap-2.5">
                  <Newspaper className="w-5 h-5 text-secondary" />
                  <div>
                    <h3 className="font-display text-lg font-bold text-on-surface leading-none">The CAC Journal</h3>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-on-surface-variant/70">
                      Insights &amp; field notes
                    </span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="p-1.5 border border-black/10 bg-black/5 hover:border-black/25 hover:rotate-90 text-on-surface-variant hover:text-on-surface transition-all duration-300"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Posts */}
              <div className="max-h-[60vh] overflow-y-auto no-scrollbar p-4 sm:p-6">
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
                  initial="hidden"
                  animate="show"
                  variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } } }}
                >
                  {posts.map((post) => (
                    <motion.button
                      key={post.id}
                      variants={{
                        hidden: { opacity: 0, y: 12 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
                      }}
                      onClick={() => setSelected(post)}
                      className="text-left glass-surface p-5 group hover:border-tertiary/50 hover:shadow-[0_20px_45px_-24px_rgba(19,41,75,0.4)] transition-shadow duration-300 flex flex-col"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-secondary bg-secondary/5 border border-secondary/20 px-1.5 py-0.5">
                          {post.category}
                        </span>
                        {post.readTime && (
                          <span className="font-mono text-[9px] text-on-surface-variant/60 flex items-center gap-1">
                            <Clock className="w-2.5 h-2.5" /> {post.readTime}
                          </span>
                        )}
                      </div>
                      <h4 className="font-display text-base font-semibold text-on-surface mb-1.5 leading-snug group-hover:text-secondary transition-colors">
                        {post.title}
                      </h4>
                      <p className="font-sans text-xs text-on-surface-variant font-light leading-relaxed line-clamp-2 mb-3 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="font-mono text-[9px] text-on-surface-variant/60 uppercase tracking-wider flex items-center gap-1">
                          <CalendarDays className="w-2.5 h-2.5" /> {post.date}
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-tertiary flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                          Read <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Full article reader (sits above the panel) */}
      <BlogReaderModal post={selected} onClose={() => setSelected(null)} />
    </>
  );
}
