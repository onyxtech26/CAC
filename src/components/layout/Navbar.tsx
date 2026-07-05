import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import BlogMenu from './BlogMenu';

interface NavbarProps {
  onBookConsultation: () => void;
  onOpenInquiryLog: () => void;
}

export default function Navbar({ onBookConsultation, onOpenInquiryLog }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [blogMenuOpen, setBlogMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detection
      const sections = ['home', 'about', 'services', 'investment', 'process', 'why-cac', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Investment Outlook', href: '#investment', id: 'investment' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Why CAC', href: '#why-cac', id: 'why-cac' },
    { name: 'Blog', href: '#blog', id: 'blog' },
  ];

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl h-[64px] z-50 transition-all duration-300 border rounded-full ${isScrolled
            ? 'bg-white/75 backdrop-blur-md border-black/10 shadow-lg'
            : 'bg-white/30 backdrop-blur-sm border-black/5 shadow-md'
          } flex justify-between items-center px-4 md:px-6`}
      >
        {/* Logo — click scrolls to top */}
        <a
          href="#home"
          aria-label="CAC — back to top"
          className="flex items-center group select-none"
        >
          <img
            src="/icon.png"
            alt="Conglomerate Appraisal Consultancy"
            className="h-9 md:h-10 w-auto group-hover:scale-110 transition-transform duration-300"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-sans text-xs uppercase tracking-[0.2em] text-on-surface-variant">
          {navLinks.map((link) =>
            link.id === 'blog' ? (
              <button
                key={link.id}
                onClick={() => setBlogMenuOpen((v) => !v)}
                aria-expanded={blogMenuOpen}
                className={`uppercase tracking-[0.2em] hover:text-tertiary transition-all duration-300 relative py-1 flex items-center gap-1 ${blogMenuOpen || activeSection === link.id ? 'text-secondary font-semibold font-mono' : ''
                  }`}
              >
                {link.name}
                <span className={`transition-transform duration-300 ${blogMenuOpen ? 'rotate-180' : ''}`}>▾</span>
                {(blogMenuOpen || activeSection === link.id) && (
                  <span className="absolute -bottom-0.5 left-0 w-full h-[1.5px] bg-gradient-to-r from-secondary to-tertiary" />
                )}
              </button>
            ) : (
              <a
                key={link.id}
                href={link.href}
                className={`hover:text-tertiary transition-all duration-300 relative py-1 ${activeSection === link.id
                    ? 'text-secondary font-semibold font-mono'
                    : ''
                  }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-secondary to-tertiary" />
                )}
              </a>
            )
          )}
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-4 h-full py-2">
          <button
            onClick={onBookConsultation}
            className="btn-premium bg-secondary text-white px-6 h-full rounded-full font-mono text-xs uppercase font-semibold hover:bg-tertiary hover:border-tertiary duration-200 border border-secondary shadow-md hover:shadow-tertiary/25"
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile Menu Buttons */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-on-surface p-3 flex items-center justify-center rounded-sm hover:bg-black/5 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[80px] z-40 bg-white/95 backdrop-blur-2xl md:hidden border-b border-black/15 animate-fade-in">
          <div className="flex flex-col p-6 space-y-6 font-mono text-sm tracking-wider uppercase">
            {navLinks.map((link) =>
              link.id === 'blog' ? (
                <button
                  key={link.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setBlogMenuOpen(true);
                  }}
                  className="py-4 border-b border-black/5 flex justify-between items-center text-left text-on-surface-variant uppercase"
                >
                  <span>{link.name}</span>
                  <span className="text-[10px] opacity-40">0{navLinks.indexOf(link) + 1}</span>
                </button>
              ) : (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-4 border-b border-black/5 flex justify-between items-center ${activeSection === link.id ? 'text-secondary font-bold' : 'text-on-surface-variant'
                    }`}
                >
                  <span>{link.name}</span>
                  <span className="text-[10px] opacity-40">0{navLinks.indexOf(link) + 1}</span>
                </a>
              )
            )}
            <div className="pt-4 flex flex-col gap-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookConsultation();
                }}
                className="w-full bg-secondary text-white py-4 text-center font-mono text-xs uppercase font-semibold transition-all hover:bg-tertiary hover:border-tertiary active:scale-95 duration-200 border border-secondary"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Blog "hanging" panel that drops from the navbar */}
      <BlogMenu open={blogMenuOpen} onClose={() => setBlogMenuOpen(false)} />
    </>
  );
}
