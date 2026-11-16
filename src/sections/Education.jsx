import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { education } from '../data/profileData';

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="pb-14">
      <SectionHeading id="education-title" title="Education & Certification" />
      <ul className="grid gap-5 md:grid-cols-2">
        {education.map(({ type, title, institution, logo, logoClass }, i) => (
          <Reveal as="li" key={title} delay={i * 0.06}>
            <div className="flex h-full items-center gap-5 rounded-2xl border border-line bg-white px-6 py-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
              <img
                src={logo}
                alt={`${institution} logo`}
                width="64"
                height="64"
                loading="lazy"
                className={`h-16 w-16 shrink-0 object-cover ${logoClass}`}
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-subtle">{type}</p>
                <h3 className="mt-0.5 text-[17px] font-bold leading-snug tracking-tight text-ink">{title}</h3>
                <p className="text-[15px] text-muted">{institution}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
