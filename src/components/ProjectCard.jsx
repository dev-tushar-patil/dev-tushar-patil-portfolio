import { SquareArrowOutUpRight, Infinity as InfinityIcon } from 'lucide-react';

/*
 * Reusable card for company and personal projects.
 * If `url` is set, the whole card becomes a link that opens in a new tab.
 */
export default function ProjectCard({ title, subtitle, description, tags = [], image, url, badge, badgeLogo }) {
  const isLink = Boolean(url);
  const Wrapper = isLink ? 'a' : 'article';
  const linkProps = isLink
    ? { href: url, target: '_blank', rel: 'noopener noreferrer', 'aria-label': `${title} (opens in a new tab)` }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
    >
      <div className="relative aspect-[8/3] overflow-hidden bg-[#f6f7f9]">
        <img
          src={image}
          alt={`${title} preview`}
          loading="lazy"
          decoding="async"
          width="800"
          height="300"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {badge && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-white/90 py-0.5 pl-0.5 pr-2 text-[10px] font-semibold uppercase tracking-wide text-ink backdrop-blur">
            {badgeLogo ? (
              <img src={badgeLogo} alt="" width="18" height="18" className="h-[18px] w-[18px] rounded-[4px] object-cover" />
            ) : (
              <InfinityIcon className="h-3 w-3" aria-hidden="true" />
            )}
            {badge}
          </span>
        )}
        <span
          className={`absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-md bg-white/90 backdrop-blur ${isLink ? 'text-ink' : 'text-subtle'}`}
          title={isLink ? 'Open project' : 'Link coming soon'}
        >
          <SquareArrowOutUpRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <h3 className="text-[17px] font-bold leading-snug tracking-tight text-ink">
          {title}
          {subtitle && <span className="font-bold"> – {subtitle}</span>}
        </h3>
        <p className="mt-1 text-sm text-muted">{description}</p>
        <ul className="mt-auto flex flex-wrap gap-2 pt-4" aria-label="Technologies">
          {tags.map((tag) => (
            <li key={tag} className="rounded-full bg-chip px-3 py-1 text-xs font-medium text-ink">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
}
