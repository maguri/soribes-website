import SectionTitle from "../components/SectionTitle";
import Seo from "../components/Seo";

const services = [
  "Mantenimiento preventivo planificado",
  "Asistencia correctiva urgente",
  "Calibracion y verificacion metrologica",
  "Sustitucion de componentes y modernizacion de equipos",
  "Formacion tecnica para operarios y responsables de planta"
];

export default function ServicioTecnicoPage() {
  return (
    <section className="section-container">
      <Seo
        title="Servicio tecnico de basculas industriales"
        description="Soporte tecnico especializado para basculas industriales: mantenimiento, calibracion, reparacion y mejora de equipos."
        path="/servicio-tecnico"
      />
      <SectionTitle
        eyebrow="Servicio tecnico"
        title="Disponibilidad, rapidez y fiabilidad postventa"
        description="Nuestro equipo tecnico trabaja con protocolos de intervencion, repuestos originales y enfoque preventivo."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <article className="rounded-lg border border-steel-300 bg-white p-6">
          <h3 className="text-xl font-semibold">Cobertura y tiempos de respuesta</h3>
          <p className="mt-3 text-sm text-steel-600">
            Atendemos incidencias en todo el territorio nacional con red tecnica especializada y coordinacion centralizada.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-steel-700">
            {services.map((service) => (
              <li key={service}>- {service}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-lg border border-steel-300 bg-white p-6">
          <img
            src="/images/servicio-tecnico.svg"
            alt="Tecnico calibrando una bascula industrial"
            className="h-56 w-full rounded-md object-cover"
          />
          <p className="mt-4 text-sm text-steel-600">
            Tambien ofrecemos contratos de mantenimiento para reducir paradas no planificadas y mejorar la vida util de
            los equipos.
          </p>
        </article>
      </div>
    </section>
  );
}
