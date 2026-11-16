import { ArrowUpRight } from 'lucide-react';

export default function ProfileCard({ platform, username, metric, url, icon: Icon, iconClass }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${platform} profile ${username} (opens in a new tab)`}
      className="group relative flex h-full items-center gap-3 rounded-xl border border-line bg-white py-4 pl-3.5 pr-3 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
    >
      <span className={`grid h-9 w-9 shrink-0 place-items-center ${iconClass}`}>
        <Icon size={30} />
      </span>
      <span className="min-w-0 pr-3">
        <span className="block text-sm font-semibold text-ink">{platform}</span>
        {metric && <span className="block text-[11px] leading-4 text-muted">{metric}</span>}
        <span className="block break-all text-xs text-muted">{username}</span>
      </span>
      <ArrowUpRight
        className="absolute right-3 top-3 h-4 w-4 text-ink transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </a>
  );
}
