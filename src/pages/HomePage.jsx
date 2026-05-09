import FeatureGrid from "../components/FeatureGrid";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import Seo from "../components/Seo";
import { solutions, valuePillars } from "../data/companyData";

export default function HomePage() {
  return (
    <>
      <Seo
        title="Basculas industriales y sistemas de pesaje"
        description="Fabricante nacional de basculas industriales con ingenieria propia, servicio tecnico especializado y soluciones de pesaje para cada sector."
        path="/"
      />
      <Hero />

      <section className="section-container">
        <SectionTitle
          eyebrow="Propuesta de valor"
          title="Pensada para entornos industriales reales"
          description="Aportamos rendimiento operativo, robustez y fiabilidad metrologica en cada proyecto."
        />
        <FeatureGrid items={valuePillars} />
      </section>

      <section className="bg-white">
        <div className="section-container grid gap-8 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Soluciones destacadas"
              title="Equipos de pesaje para todo el ciclo logistico"
              description="Desde entrada de materias primas hasta expedicion final, conectamos el pesaje con tus sistemas."
            />
            <ul className="mt-6 space-y-3 text-steel-700">
              {solutions.map((solution) => (
                <li key={solution} className="rounded-md border border-steel-200 bg-steel-100 px-4 py-3 text-sm">
                  {solution}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-steel-300 bg-steel-100 p-6 shadow-industrial">
            <h3 className="text-xl font-bold text-steel-900">Descarga nuestro catalogo tecnico</h3>
            <p className="mt-3 text-sm text-steel-600">
              Consulta especificaciones de plataformas, celulas de carga y soluciones de integracion para industria.
            </p>
            <a
              href="/catalogo.pdf"
              className="mt-5 inline-flex rounded-md bg-industrial-700 px-4 py-2 text-sm font-semibold text-white hover:bg-industrial-800"
            >
              Descargar PDF
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
