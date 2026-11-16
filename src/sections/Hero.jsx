import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download } from 'lucide-react';
import Button from '../components/Button';
import { profile } from '../data/profileData';

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Hero() {
  const [notice, setNotice] = useState(false);
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  // Downloads the resume only if the PDF really exists (dev servers answer missing files with index.html).
  const handleResume = async (e) => {
    e.preventDefault();
    const { url, fileName } = profile.resume;
    try {
      const res = await fetch(url, { method: 'HEAD', cache: 'no-store' });
      const type = res.headers.get('content-type') || '';
      if (res.ok && type.includes('pdf')) {
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        a.remove();
        return;
      }
    } catch {
      /* fall through to notice */
    }
    setNotice(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setNotice(false), 4000);
  };

  return (
    <section id="overview" aria-labelledby="hero-title" className="pb-10 pt-14 text-center sm:pt-20">
      <motion.h1
        id="hero-title"
        {...fadeUp(0)}
        className="text-5xl font-extrabold leading-[1.05] tracking-[-0.035em] text-ink sm:text-7xl"
      >
        {profile.name}
      </motion.h1>
      <motion.p
        {...fadeUp(0.08)}
        className="mt-2 text-2xl font-medium tracking-tight text-[#1e293b] sm:text-[34px]"
      >
        {profile.designation}
      </motion.p>
      <motion.p {...fadeUp(0.16)} className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg">
        {profile.tagline}
      </motion.p>

      <motion.div {...fadeUp(0.24)} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
        <Button href="#projects" size="lg" className="w-full max-w-[240px] sm:w-auto sm:min-w-[196px]">
          View Projects <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Button>
        <Button
          href={profile.resume.url}
          onClick={handleResume}
          variant="outline"
          size="lg"
          className="w-full max-w-[240px] sm:w-auto sm:min-w-[196px]"
        >
          Download Resume <Download className="h-4 w-4" aria-hidden="true" />
        </Button>
      </motion.div>

      <p role="status" aria-live="polite" className={`mt-3 h-5 text-sm text-subtle transition-opacity ${notice ? 'opacity-100' : 'opacity-0'}`}>
        {notice ? 'Resume will be available soon.' : ''}
      </p>
    </section>
  );
}
