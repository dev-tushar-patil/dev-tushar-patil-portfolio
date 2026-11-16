// Experience shown as one card per company (newest first).
export default function ExperienceTimeline({ items }) {
  return (
    <ol className="grid gap-5 lg:grid-cols-2">
      {items.map((item) => (
        <li
          key={item.company}
          className={`flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${
            item.current ? 'border-[#e3edf9] bg-[#f8fbff]' : 'border-[#ecebf5] bg-[#fbfaff]'
          }`}
        >
          <div className="flex items-start gap-3.5">
            {item.logo && (
              <a href={item.url} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true" className="shrink-0">
                <img
                  src={item.logo}
                  alt=""
                  width="48"
                  height="48"
                  loading="lazy"
                  className="h-12 w-12 rounded-xl border border-line bg-white object-cover"
                />
              </a>
            )}
            <div className="min-w-0">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-bold leading-snug text-ink underline-offset-4 hover:underline"
              >
                {item.company}
                <span className="sr-only"> (opens company website in a new tab)</span>
              </a>
              <p className="text-[15px] text-muted">{item.role}</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-line bg-white px-3 py-1 text-[13px] font-medium text-ink">
              {item.duration}
            </span>
            {item.current && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-mint px-3 py-1 text-[13px] font-medium text-[#166534]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" aria-hidden="true" />
                Current
              </span>
            )}
          </div>

          {item.highlights?.length > 0 && (
            <ul className="mt-4 space-y-2 border-t border-[#e8edf3] pt-4">
              {item.highlights.map((point) => (
                <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                  <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[#94a3b8]" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}
