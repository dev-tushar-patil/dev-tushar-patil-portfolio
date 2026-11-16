import ProfileCard from '../components/ProfileCard';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { developerProfiles } from '../data/profileData';

export default function DeveloperProfiles() {
  return (
    <section id="profiles" aria-labelledby="profiles-title" className="pb-14">
      <SectionHeading id="profiles-title" title="Developer Profiles & Links" />
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {developerProfiles.map((p, i) => (
          <Reveal as="li" key={p.platform} delay={i * 0.05}>
            <ProfileCard {...p} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
