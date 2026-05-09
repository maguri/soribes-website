import PdfDownloadLink from "./PdfDownloadLink";
import { basculaCatalogCards, basculaCatalogSection } from "../data/catalogPdfs";

export default function CatalogBasculasSection() {
  return (
    <section id="catalogos-basculas" className="scroll-mt-28 border-t border-steel-200 bg-white py-14">
      <div className="section-container">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-industrial-700">{basculaCatalogSection.eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold text-steel-900 sm:text-4xl">{basculaCatalogSection.title}</h2>
        <p className="mt-3 max-w-3xl text-sm text-steel-600">{basculaCatalogSection.description}</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {basculaCatalogCards.map((card) => (
            <article
              key={card.id}
              className="flex flex-col rounded-xl border border-steel-300 bg-steel-50 p-6 shadow-sm transition hover:border-industrial-400"
            >
              <span className="w-fit rounded-full bg-industrial-100 px-3 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-industrial-800">
                {card.tag}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-steel-900">{card.title}</h3>
              <PdfDownloadLink
                href={card.url}
                downloadName={card.downloadName}
                className="mt-5 w-full justify-center"
              >
                Descargar PDF
              </PdfDownloadLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
