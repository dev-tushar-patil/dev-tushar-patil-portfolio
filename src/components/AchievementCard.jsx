export default function AchievementCard({ value, label, icon: Icon, tone }) {
  return (
    <div
      className={`flex h-full items-center gap-5 rounded-2xl border px-6 py-6 transition-transform duration-300 hover:-translate-y-1 ${tone}`}
    >
      <Icon className="h-9 w-9 shrink-0 text-ink" strokeWidth={1.6} aria-hidden="true" />
      <div>
        <p className="text-2xl font-bold leading-tight tracking-tight text-ink">{value}</p>
        <p className="text-[15px] text-muted">{label}</p>
      </div>
    </div>
  );
}
