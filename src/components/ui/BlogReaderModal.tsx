import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CalendarDays, Clock, User, X } from 'lucide-react';
import { BlogPost } from '../../types';
import { lockScroll, unlockScroll } from '../../lib/scrollLock';

interface BlogReaderModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export default function BlogReaderModal({ post, onClose }: BlogReaderModalProps) {
  useEffect(() => {
    if (!post) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    lockScroll();
    return () => {
      document.removeEventListener('keydown', onKey);
      unlockScroll();
    };
  }, [post, onClose]);

  return (
    <AnimatePresence>
      {post && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-md"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={post.title}
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12, transition: { duration: 0.16, ease: 'easeIn' } }}
            transition={{ type: 'spring', damping: 26, stiffness: 280 }}
            className="relative w-full max-w-2xl max-h-[88vh] bg-white/95 backdrop-blur-2xl border border-black/10 p-6 sm:p-10 overflow-y-auto no-scrollbar shadow-2xl z-10"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 p-1.5 border border-black/10 bg-black/5 hover:border-black/25 hover:rotate-90 text-on-surface-variant hover:text-on-surface transition-all duration-300"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="pt-4">
              <div className="flex flex-wrap items-center gap-3 mb-4 font-mono text-[10px] uppercase tracking-wider text-on-surface-variant/70">
                <span className="text-secondary bg-secondary/5 border border-secondary/20 px-2 py-0.5">{post.category}</span>
                <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-3 h-3" /> {post.date}</span>
                {post.readTime && <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>}
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-on-surface leading-tight mb-6">
                {post.title}
              </h3>
              <div className="space-y-4 font-sans text-sm sm:text-base text-on-surface-variant font-light leading-relaxed">
                {post.content.split(/\n\s*\n/).map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
