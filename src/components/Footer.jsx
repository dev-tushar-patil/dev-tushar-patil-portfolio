import { Mail } from 'lucide-react';
import { profile, socialLinks } from '../data/profileData';
import { Brand } from './Navbar';

export default function Footer() {
  const links = [
    ...socialLinks,
    { label: 'Email', url: `mailto:${profile.email}`, icon: (p) => <Mail size={p.size} strokeWidth={1.8} /> },
  ];

  return (
    <footer className="mx-auto mt-10 max-w-[1200px] px-4 sm:px-6">
      <div className="flex flex-col gap-6 border-t border-line py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Brand />
          <p className="mt-1 text-sm text-muted">{profile.designation}</p>
        </div>
        <ul className="flex flex-wrap items-center gap-2" aria-label="Social links">
          {links.map(({ label, url, icon: Icon }) => {
            const external = !url.startsWith('mailto:');
            return (
              <li key={label}>
                <a
                  href={url}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  aria-label={external ? `${label} (opens in a new tab)` : `Send an email to ${profile.email}`}
                  title={label}
                  className="grid h-10 w-10 place-items-center rounded-full text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-chip"
                >
                  <Icon size={22} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="pb-8 text-center text-xs text-subtle sm:text-left">
        © 2026 {profile.name}. All Rights Reserved.
      </p>
    </footer>
  );
}
