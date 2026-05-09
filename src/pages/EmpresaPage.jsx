import SectionTitle from "../components/SectionTitle";
import Seo from "../components/Seo";
import { companyData } from "../data/companyData";

const milestones = [
  { year: "1962", text: "Inicio de actividad en soluciones de pesaje mecanico para industria local." },
  { year: "1988", text: "Modernizacion de fabrica y transicion a sistemas electronicos de alta precision." },
  { year: "2006", text: "Expansion de servicio tecnico y cobertura en toda la peninsula." },
  { year: "2022", text: "Digitalizacion de equipos con conectividad e integracion de datos." }
];

export default function EmpresaPage() {
  return (
    <section className="section-container">
      <Seo
        title="Empresa industrial de pesaje"
        description="Conoce la trayectoria de SORIBES: empresa fabricante de basculas industriales con mas de seis decadas de experiencia."
        path="/empresa"
      />
      <SectionTitle
        eyebrow="Empresa"
        title="Tradicion industrial con vision de futuro"
        description="Somos una empresa especializada en pesaje industrial con produccion propia, oficina tecnica y orientacion total al cliente B2B."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <article className="rounded-lg border border-steel-300 bg-white p-6">
          <h3 className="text-xl font-semibold">Nuestra trayectoria</h3>
          <p className="mt-3 text-sm text-steel-600">
            Desde {companyData.founded}, acompanamos a fabricantes, operadores logisticos y companias de distribucion en
            la mejora de sus procesos de control de peso y trazabilidad.
          </p>
          <div className="mt-6 space-y-3">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="rounded-md border border-steel-200 bg-steel-100 p-3">
                <p className="text-sm font-semibold text-industrial-700">{milestone.year}</p>
                <p className="text-sm text-steel-700">{milestone.text}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-lg border border-steel-300 bg-white p-6">
          <h3 className="text-xl font-semibold">Capacidades internas</h3>
          <ul className="mt-4 space-y-3 text-sm text-steel-700">
            <li>- Oficina tecnica para proyectos a medida.</li>
            <li>- Fabricacion metalica y ensamblado electronico.</li>
            <li>- Verificacion y calibracion metrologica.</li>
            <li>- Instalacion y puesta en marcha in situ.</li>
            <li>- Servicio postventa y mantenimiento programado.</li>
          </ul>
          <img
            src="/images/planta-fabricacion.svg"
            alt="Equipo de fabricacion de basculas industriales"
            className="mt-6 h-52 w-full rounded-md object-cover"
          />
        </article>
      </div>
    </section>
  );
}
