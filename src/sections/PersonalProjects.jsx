import { Fragment } from 'react';
import { ArrowUpRight } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { personalProjects, upcomingProjects } from '../data/projectsData';
import { developerProfiles } from '../data/profileData';

const githubUrl = developerProfiles.find((p) => p.platform === 'GitHub')?.url;

export default function PersonalProjects() {
  return (
    <section id="personal-projects" aria-labelledby="personal-projects-title" className="pb-14">
      <SectionHeading id="personal-projects-title" title="My Personal Projects" />
      <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {personalProjects.map((project, i) => (
          <Reveal as="li" key={project.id} delay={(i % 3) * 0.06}>
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-6 flex flex-col gap-3 rounded-2xl bg-[#f6f7f9] px-6 py-4 text-sm md:flex-row md:items-center md:justify-between">
        <span className="font-bold text-ink">More Projects</span>
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-muted">
          {upcomingProjects.map((name, i) => (
            <Fragment key={name}>
              {i > 0 && <li aria-hidden="true" className="hidden h-4 w-px bg-[#cfd6e0] md:block" />}
              <li>{name}</li>
            </Fragment>
          ))}
        </ul>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-bold text-ink hover:underline"
        >
          More Projects Coming Soon... <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </Reveal>
    </section>
  );
}
