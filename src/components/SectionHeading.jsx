export default function SectionHeading({ title, note, subtitle, id, className = '' }) {
  return (
    <div className={`mb-6 ${className}`}>
      <h2 id={id} className="text-2xl font-bold tracking-tight text-ink sm:text-[28px]">
        {title}
        {note && (
          <span className="ml-2 align-middle text-base font-medium tracking-normal text-muted">
            ({note})
          </span>
        )}
      </h2>
      {subtitle && <p className="mt-1.5 max-w-2xl text-[15px] text-muted">{subtitle}</p>}
    </div>
  );
}
