import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { companyName, companyProjects } from '../data/projectsData';
import acmeLogo from '../assets/logos/acme-infovision.jpg';

export default function CompanyProjects() {
  return (
    <section id="projects" aria-labelledby="company-projects-title" className="pb-14 pt-4">
      <SectionHeading
        id="company-projects-title"
        title="My Company Projects"
        note={companyName}
        subtitle={`Products and applications developed as part of my professional experience at ${companyName}`}
      />
      <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {companyProjects.map((project, i) => (
          <Reveal as="li" key={project.id} delay={i * 0.06}>
            <ProjectCard {...project} badge="ACME" badgeLogo={acmeLogo} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
