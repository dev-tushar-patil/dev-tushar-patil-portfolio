import { Mail, Phone } from 'lucide-react';
import SplitRow from '../components/SplitRow';
import { profile } from '../data/profileData';

const items = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail, tone: 'bg-sky' },
  { label: 'Mobile', value: profile.phone, href: profile.phoneHref, icon: Phone, tone: 'bg-mint' },
];

export default function ContactDetails() {
  return (
    <SplitRow id="contact-details" title="Reach Me">
      <ul className="grid gap-4 sm:grid-cols-2">
        {items.map(({ label, value, href, icon: Icon, tone }) => (
          <li key={label}>
            <a
              href={href}
              className="group flex items-center gap-4 rounded-xl border border-line bg-white px-4 py-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${tone}`}>
                <Icon className="h-5 w-5 text-ink" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-medium uppercase tracking-wide text-subtle">{label}</span>
                <span className="block truncate text-[15px] font-semibold text-ink">{value}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </SplitRow>
  );
}
