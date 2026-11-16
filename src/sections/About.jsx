import SplitRow from '../components/SplitRow';
import { profile } from '../data/profileData';

export default function About() {
  return (
    <SplitRow id="about" title="About">
      <div className="space-y-3 text-base leading-relaxed text-muted sm:text-[17px]">
        {profile.about.map((para) => (
          <p key={para.slice(0, 24)}>{para}</p>
        ))}
      </div>
    </SplitRow>
  );
}
