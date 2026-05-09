export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.2em] text-industrial-700">{eyebrow}</p> : null}
      <h2 className="mt-2 text-3xl font-bold text-steel-900 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-steel-600">{description}</p> : null}
    </div>
  );
}
