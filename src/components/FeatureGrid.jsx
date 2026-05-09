export default function FeatureGrid({ items }) {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <article key={item.title} className="rounded-lg border border-steel-300 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-steel-900">{item.title}</h3>
          <p className="mt-2 text-sm text-steel-600">{item.description}</p>
        </article>
      ))}
    </div>
  );
}
