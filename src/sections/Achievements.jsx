import AchievementCard from '../components/AchievementCard';
import Reveal from '../components/Reveal';
import { achievements } from '../data/profileData';

export default function Achievements() {
  return (
    <section aria-label="Highlights" className="pb-12">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((item, i) => (
          <Reveal as="li" key={item.label} delay={i * 0.06}>
            <AchievementCard {...item} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
