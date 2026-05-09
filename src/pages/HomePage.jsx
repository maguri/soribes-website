import { Link } from "react-router-dom";
import CatalogBasculasSection from "../components/CatalogBasculasSection";
import CertificationBar from "../components/CertificationBar";
import FeatureGrid from "../components/FeatureGrid";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import Seo from "../components/Seo";
import { solutions, valuePillars } from "../data/companyData";

export default function HomePage() {
  return (
    <>
      <Seo
        title="Sistemas de pesaje Bilanciai para camiones"
        description="Distribuidor oficial Bilanciai Group en Espana. Celulas CPD-M, basculas puente SBP/M-SB y BP-3103H, terminales DD700. Consulta, oferta y asistencia tecnica."
        path="/"
      />
      <Hero />
      <CertificationBar />

      <section className="section-container">
        <SectionTitle
          eyebrow="Por que Dastions"
          title="Tecnologia de pesaje homologada para operaciones exigentes"
          description="Combinamos catalogo Bilanciai con soporte local: desde la celula digital hasta el terminal y la integracion en planta."
        />
        <FeatureGrid items={valuePillars} />
      </section>

      <CatalogBasculasSection />

      <section className="bg-steel-50">
        <div className="section-container grid gap-8 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Lineas de producto"
              title="Del pesaje de flota a la electronica de cabecera"
              description="Referencia rapida a las familias del catalogo de camiones y pesaje industrial Bilanciai."
            />
            <ul className="mt-6 space-y-3 text-steel-700">
              {solutions.map((solution) => (
                <li key={solution} className="rounded-md border border-steel-200 bg-steel-100 px-4 py-3 text-sm">
                  {solution}
                </li>
              ))}
            </ul>
            <Link
              to="/soluciones#productos"
              className="mt-6 inline-flex text-sm font-semibold text-industrial-700 hover:underline"
            >
              Ver fichas tecnicas y tablas de modelos
            </Link>
          </div>
          <div className="rounded-xl border border-steel-300 bg-white p-6 shadow-industrial">
            <h3 className="text-xl font-bold text-steel-900">Documentacion tecnica</h3>
            <p className="mt-3 text-sm text-steel-600">
              Todos los folletos oficiales estan en la seccion Catalogo de Basculas (PDF desde{" "}
              <code className="rounded bg-steel-100 px-1 text-xs">src/assets/pdf</code>).
            </p>
            <Link
              to="/#catalogos-basculas"
              className="mt-5 inline-flex rounded-md bg-industrial-700 px-4 py-2 text-sm font-semibold text-white hover:bg-industrial-800"
            >
              Ir a catalogos PDF
            </Link>
            <p className="mt-4 text-xs text-steel-500">Imagenes de producto y obra en el resto de la web.</p>
          </div>
        </div>
      </section>
    </>
  );
}
