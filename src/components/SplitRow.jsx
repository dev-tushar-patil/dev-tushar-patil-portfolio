import Reveal from './Reveal';

// Two-column row used by About / Experience / Contact details:
// heading on the left, a hairline divider, content on the right.
export default function SplitRow({ id, title, children }) {
  const headingId = `${id}-title`;
  return (
    <section id={id} aria-labelledby={headingId} className="pb-10">
      <Reveal className="grid gap-4 md:grid-cols-[220px_1fr] md:gap-0">
        <h2 id={headingId} className="pt-0.5 text-2xl font-bold tracking-tight text-ink sm:text-[28px]">
          {title}
        </h2>
        <div className="md:border-l md:border-line md:pl-10">{children}</div>
      </Reveal>
    </section>
  );
}
