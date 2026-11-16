export default function SkillCard({ name, image, icon: Icon, color = 'text-ink' }) {
  return (
    <li className="group flex flex-col items-center gap-2 rounded-xl px-2 py-3 text-center transition-colors duration-200 hover:bg-[#f7f9fc]">
      <span className="grid h-10 w-10 place-items-center transition-transform duration-300 group-hover:-translate-y-0.5">
        {image ? (
          <img src={image} alt="" width="34" height="34" loading="lazy" className="h-[34px] w-[34px]" />
        ) : (
          <Icon className={`h-8 w-8 ${color}`} strokeWidth={1.6} aria-hidden="true" />
        )}
      </span>
      <span className="text-sm font-medium text-ink">{name}</span>
    </li>
  );
}
