import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navLinks, profile } from '../data/profileData';
import Button from './Button';

// Page sections in document order, mapped to the nav item they highlight.
const SECTION_TO_NAV = [
  ['overview', 'overview'],
  ['profiles', 'profiles'],
  ['about', 'overview'],
  ['experience', 'experience'],
  ['projects', 'projects'],
  ['personal-projects', 'projects'],
  ['skills', 'skills'],
  ['contact', 'contact'],
];

function useActiveSection() {
  const [active, setActive] = useState('overview');

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) return setActive('contact');
      let current = 'overview';
      for (const [id, nav] of SECTION_TO_NAV) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = nav;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return active;
}

export function Brand({ className = '' }) {
  return (
    <a href="#overview" className={`flex items-center gap-2 text-ink ${className}`} aria-label={`${profile.brand}, back to top`}>
      <span className="font-mono text-[15px] font-bold tracking-tight">&lt;/&gt;</span>
      <span className="text-[15px] font-bold tracking-tight">{profile.brand}</span>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <header className="sticky top-3 z-50 px-4 pt-3 sm:px-6">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border border-[#dfeefc] bg-navbg/90 py-2 pl-5 pr-2 shadow-[0_2px_12px_rgb(15_40_80/0.06)] backdrop-blur-md"
      >
        <Brand />

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'bg-white text-ink shadow-[0_1px_3px_rgb(0_0_0/0.08)]' : 'text-muted hover:text-ink'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1.5">
          <Button href="#contact" size="sm" className="hidden sm:inline-flex">
            Get in Touch <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-9 w-9 place-items-center rounded-full text-ink transition-colors hover:bg-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-5xl rounded-3xl border border-[#dfeefc] bg-navbg p-3 shadow-[0_8px_30px_rgb(15_40_80/0.1)] lg:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === link.id ? 'true' : undefined}
                    className={`block rounded-2xl px-4 py-3 text-[15px] font-medium ${
                      active === link.id ? 'bg-white text-ink' : 'text-muted hover:bg-white/70 hover:text-ink'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button href="#contact" onClick={() => setOpen(false)} className="mt-2 w-full sm:hidden">
              Get in Touch <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
