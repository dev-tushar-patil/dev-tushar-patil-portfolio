import ExperienceTimeline from '../components/ExperienceTimeline';
import SplitRow from '../components/SplitRow';
import { experiences } from '../data/experienceData';

export default function Experience() {
  return (
    <SplitRow id="experience" title="Experience">
      <ExperienceTimeline items={experiences} />
    </SplitRow>
  );
}
