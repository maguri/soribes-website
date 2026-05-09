import { Link } from "react-router-dom";
import CatalogSoluciones from "../components/CatalogSoluciones";
import SectionTitle from "../components/SectionTitle";
import Seo from "../components/Seo";

export default function SolucionesPage() {
  return (
    <section className="section-container">
      <Seo
        title="Catalogo Bilanciai: celulas, basculas y terminales"
        description="CPD-M, SBP/M-SB, BP-3103H y DD700. Especificaciones, tablas de modelos y configuraciones segun documentacion comercial Bilanciai / Dastions."
        path="/soluciones"
      />
      <SectionTitle
        eyebrow="Soluciones"
        title="Equipos para pesaje de camiones y control industrial"
        description="Contenido alineado con la gama distribuida por Dastions: desde la celula digital hasta la bascula puente y el terminal de pesaje."
      />
      <p className="mt-4 text-sm text-steel-600">
        <Link to="/#catalogos-basculas" className="font-semibold text-industrial-700 hover:underline">
          Catalogo de Basculas (descarga de PDF)
        </Link>{" "}
        - mismos archivos que en portada, listos para enviar al cliente.
      </p>

      <div className="mt-10">
        <CatalogSoluciones />
      </div>
    </section>
  );
}
