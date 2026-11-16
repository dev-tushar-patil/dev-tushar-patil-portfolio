import { ArrowUpRight } from 'lucide-react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { profile } from '../data/profileData';

export default function Contact() {
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent("Let's build something great")}`;
  return (
    <section id="contact" aria-labelledby="contact-title" className="pb-4">
      <Reveal className="flex flex-col items-start gap-6 rounded-[28px] border border-[#dfeefc] bg-navbg px-7 py-8 sm:px-10 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 id="contact-title" className="text-2xl font-bold tracking-tight text-ink sm:text-[28px]">
            Let&apos;s Build Something Great
          </h2>
          <p className="mt-1.5 max-w-xl text-[15px] text-muted sm:text-base">
            Open to new opportunities and collaborations. Let&apos;s connect and build something impactful together.
          </p>
        </div>
        <Button href={mailto} size="lg">
          Contact Me <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </Reveal>
    </section>
  );
}
