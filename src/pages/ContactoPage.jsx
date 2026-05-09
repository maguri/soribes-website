import Seo from "../components/Seo";
import SectionTitle from "../components/SectionTitle";
import { companyData } from "../data/companyData";

export default function ContactoPage() {
  return (
    <section className="section-container">
      <Seo
        title="Contacto comercial y tecnico"
        description="Contacta con SORIBES para asesoramiento tecnico, estudio de necesidades y propuesta de solucion de pesaje industrial."
        path="/contacto"
      />
      <SectionTitle
        eyebrow="Contacto"
        title="Hablemos de tu proyecto de pesaje"
        description="Atendemos consultas de nueva instalacion, mejora de sistemas existentes y mantenimiento tecnico."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <article className="rounded-lg border border-steel-300 bg-white p-6">
          <h3 className="text-xl font-semibold text-steel-900">Informacion de contacto</h3>
          <ul className="mt-4 space-y-3 text-sm text-steel-700">
            <li>
              <span className="font-semibold">Telefono:</span>{" "}
              <a className="text-industrial-700 hover:underline" href={`tel:${companyData.phone.replace(/\s+/g, "")}`}>
                {companyData.phone}
              </a>
            </li>
            <li>
              <span className="font-semibold">Email:</span>{" "}
              <a className="text-industrial-700 hover:underline" href={`mailto:${companyData.email}`}>
                {companyData.email}
              </a>
            </li>
            <li>
              <span className="font-semibold">Direccion:</span> {companyData.address}
            </li>
            <li>
              <span className="font-semibold">Horario:</span> {companyData.schedule}
            </li>
          </ul>
        </article>

        <article className="rounded-lg border border-steel-300 bg-white p-6">
          <h3 className="text-xl font-semibold text-steel-900">Solicitud rapida</h3>
          <form className="mt-4 space-y-3" action="mailto:comercial@soribes.com" method="post" encType="text/plain">
            <input
              type="text"
              name="empresa"
              placeholder="Empresa"
              className="w-full rounded-md border border-steel-300 px-3 py-2 text-sm focus:border-industrial-500 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email corporativo"
              className="w-full rounded-md border border-steel-300 px-3 py-2 text-sm focus:border-industrial-500 focus:outline-none"
            />
            <textarea
              name="mensaje"
              rows="4"
              placeholder="Describa su necesidad de pesaje"
              className="w-full rounded-md border border-steel-300 px-3 py-2 text-sm focus:border-industrial-500 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-md bg-industrial-700 px-4 py-2 text-sm font-semibold text-white hover:bg-industrial-800"
            >
              Enviar consulta
            </button>
          </form>
        </article>
      </div>
    </section>
  );
}
