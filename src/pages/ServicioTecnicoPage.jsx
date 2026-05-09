import SectionTitle from "../components/SectionTitle";
import Seo from "../components/Seo";
import { companyData } from "../data/companyData";

const services = [
  "Mantenimiento preventivo planificado para basculas puente y plataformas",
  "Asistencia correctiva y sustitucion de componentes Bilanciai",
  "Calibracion y verificacion metrologica",
  "Diagnostico remoto y en terminal DD700 para celulas digitales",
  "Formacion de operadores y responsables de planta"
];

export default function ServicioTecnicoPage() {
  return (
    <section className="section-container">
      <Seo
        title="Servicio tecnico Bilanciai Dastions"
        description="Mantenimiento, calibracion y soporte para celulas CPD-M, basculas SBP/M-SB, BP-3103H y terminales DD700."
        path="/servicio-tecnico"
      />
      <SectionTitle
        eyebrow="Servicio tecnico"
        title="Soporte para todo el sistema de pesaje"
        description={`Equipo tecnico coordinado con ${companyData.legalName}. Protocolos de intervencion, repuestos y actualizaciones segun documentacion del fabricante.`}
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <article className="rounded-lg border border-steel-300 bg-white p-6">
          <h2 className="text-xl font-semibold">Cobertura y alcance</h2>
          <p className="mt-3 text-sm text-steel-600">
            Atendemos incidencias y revisiones en todo el territorio nacional, con especial foco en continuidad de
            servicio en pesaje de flotas y centros logisticos.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-steel-700">
            {services.map((service) => (
              <li key={service}>- {service}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-lg border border-steel-300 bg-white p-6">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
            alt="Tecnico en planta - placeholder Unsplash"
            className="h-56 w-full rounded-md object-cover"
            loading="lazy"
          />
          <p className="mt-4 text-sm text-steel-600">
            Contratos de mantenimiento disponibles para reducir paradas no planificadas y alargar la vida util de
            celulas y electronica de pesaje.
          </p>
        </article>
      </div>
    </section>
  );
}
