import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import SectionTitle from "../components/SectionTitle";
import { companyData } from "../data/companyData";

const contactRows = [
  {
    key: "web",
    label: "Web",
    icon: "www",
    content: (
      <a
        href={companyData.website}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-industrial-700 hover:underline"
      >
        {companyData.websiteLabel}
      </a>
    )
  },
  {
    key: "email",
    label: "Email",
    icon: "@",
    content: (
      <a href={`mailto:${companyData.email}`} className="font-medium text-industrial-700 hover:underline">
        {companyData.email}
      </a>
    )
  },
  {
    key: "phone",
    label: "Telefono",
    icon: "Tel",
    content: (
      <a href={`tel:${companyData.phone.replace(/\s+/g, "")}`} className="font-medium text-industrial-700 hover:underline">
        {companyData.phone}
      </a>
    )
  },
  {
    key: "company",
    label: "Empresa",
    icon: "SL",
    content: <span className="font-medium text-steel-900">{companyData.legalName}</span>
  }
];

export default function ContactoPage() {
  return (
    <section className="section-container">
      <Seo
        title="Contacto Dastions Bilanciai"
        description="Distribuidor oficial Bilanciai Group. Consulta, oferta y asistencia tecnica. Web, email y telefono Dastions."
        path="/contacto"
      />
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-industrial-700">Contacto</p>
        <h1 className="mt-2 text-3xl font-bold text-steel-900 sm:text-4xl">Hablamos</h1>
        <p className="mt-3 text-sm text-steel-600">
          Distribuidor oficial Bilanciai Group. Consulta, oferta y asistencia tecnica.
        </p>
        <p className="mt-3 text-sm">
          <Link to="/#catalogos-basculas" className="font-semibold text-industrial-700 hover:underline">
            Descargar catalogos PDF (Basculas y accesorios)
          </Link>
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-lg rounded-xl border border-steel-300 bg-white p-8 shadow-industrial">
        <ul className="divide-y divide-steel-200">
          {contactRows.map((row) => (
            <li key={row.key} className="flex gap-4 py-4 first:pt-0 last:pb-0">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-industrial-600 text-xs font-bold text-white">
                {row.icon}
              </div>
              <div className="min-w-0 text-left">
                <p className="text-[0.65rem] font-bold uppercase tracking-wider text-steel-500">{row.label}</p>
                <div className="mt-0.5 text-sm text-steel-800">{row.content}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-8 lg:grid-cols-2">
        <article className="rounded-lg border border-steel-300 bg-steel-50 p-6">
          <SectionTitle
            eyebrow="Delegacion"
            title="Horario y cobertura"
            description={`${companyData.schedule}. ${companyData.coverage}.`}
          />
          <p className="mt-4 text-sm text-steel-600">{companyData.catalogEdition}</p>
        </article>

        <article className="rounded-lg border border-steel-300 bg-white p-6">
          <h2 className="text-xl font-semibold text-steel-900">Solicitud rapida</h2>
          <form className="mt-4 space-y-3" action={`mailto:${companyData.email}`} method="post" encType="text/plain">
            <input type="hidden" name="subject" value="Consulta web Dastions" />
            <input
              type="text"
              name="empresa"
              placeholder="Empresa"
              className="w-full rounded-md border border-steel-300 px-3 py-2 text-sm focus:border-industrial-500 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full rounded-md border border-steel-300 px-3 py-2 text-sm focus:border-industrial-500 focus:outline-none"
            />
            <textarea
              name="mensaje"
              rows="4"
              placeholder="Describa su necesidad (modelo, capacidad, obra civil...)"
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
