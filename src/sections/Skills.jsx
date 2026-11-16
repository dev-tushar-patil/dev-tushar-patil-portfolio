import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import { skillCategories } from '../data/skillsData';

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="pb-14">
      <SectionHeading id="skills-title" title="Skills" />
      <div className="grid gap-5 md:grid-cols-2">
        {skillCategories.map((cat, i) => (
          <Reveal
            key={cat.title}
            delay={(i % 2) * 0.06}
            className="rounded-2xl border border-line bg-white px-5 pb-4 pt-5"
          >
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-subtle">{cat.title}</h3>
            <ul className="mt-2 grid grid-cols-3 gap-1 sm:grid-cols-5">
              {cat.skills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
