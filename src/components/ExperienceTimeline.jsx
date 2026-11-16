export default function ExperienceTimeline({ items }) {
  return (
    <ol className="relative">
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <li key={item.company} className="relative flex gap-5 pb-4 last:pb-0">
            {/* rail + dot */}
            <div className="relative flex w-4 shrink-0 justify-center">
              {!last && <span className="absolute top-5 bottom-[-4px] w-px bg-[#d7dce3]" aria-hidden="true" />}
              <span
                className={`relative mt-1.5 h-3.5 w-3.5 rounded-full ${
                  item.current ? 'bg-[#2F80ED] ring-4 ring-[#2F80ED]/15' : 'bg-[#cfd6e0]'
                }`}
                aria-hidden="true"
              />
            </div>

            <div
              className={`flex flex-1 flex-col gap-2 pb-4 sm:flex-row sm:items-start sm:justify-between ${
                last ? '' : 'border-b border-line'
              }`}
            >
              <div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-ink underline-offset-4 hover:underline"
                >
                  {item.company}
                  <span className="sr-only"> (opens company website in a new tab)</span>
                </a>
                <p className="text-[15px] text-muted">{item.role}</p>
              </div>
              <span className="self-start whitespace-nowrap rounded-full bg-chip px-3.5 py-1 text-sm font-medium text-ink">
                {item.current && <span className="sr-only">Current role: </span>}
                {item.duration}
              </span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
