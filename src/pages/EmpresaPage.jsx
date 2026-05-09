import SectionTitle from "../components/SectionTitle";
import Seo from "../components/Seo";
import empresaPhoto from "../assets/img/bascula-2019.png?url";
import { companyData } from "../data/companyData";

const milestones = [
  {
    year: "1997",
    text: "Linea CPD-M: referencia en celulas digitales Bilanciai con diagnostico integrado y proteccion IP68/IP69K."
  },
  {
    year: "2000s",
    text: "Consolidacion de basculas puente modulares SBP/M-SB para instalaciones empotradas y elevadas en logistica y obra."
  },
  {
    year: "2010s",
    text: "Despliegue de soluciones sobresuelo BP-3103H con obra civil optimizada (6 apoyos, rampas 280 mm)."
  },
  {
    year: "Actualidad",
    text: "Terminales DD700 multicanal, conectividad industrial y soporte para proyectos ATEX y multirange."
  }
];

export default function EmpresaPage() {
  return (
    <section className="section-container">
      <Seo
        title="Dastions, distribuidor Bilanciai en Espana"
        description="Digital Applications Solutions: distribucion oficial Bilanciai Group, ingenieria de aplicacion y soporte para pesaje de vehiculos y plataformas."
        path="/empresa"
      />
      <SectionTitle
        eyebrow="Empresa"
        title="Digital Applications Solutions"
        description={`${companyData.legalName} actua como distribuidor oficial Bilanciai Group en Espana, con foco en pesaje de flotas, logistica y entornos industriales.`}
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <article className="rounded-lg border border-steel-300 bg-white p-6">
          <h2 className="text-xl font-semibold">Trayectoria y alianza Bilanciai</h2>
          <p className="mt-3 text-sm text-steel-600">
            Acompanamos a constructoras, plantas de residuos, puertos, industria y aridos con equipos homologados y
            documentacion metrologica alineada con OIML R-60, CE y NTEP segun version de producto.
          </p>
          <div className="mt-6 space-y-3">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="rounded-md border border-steel-200 bg-steel-50 p-3">
                <p className="text-sm font-semibold text-industrial-700">{milestone.year}</p>
                <p className="text-sm text-steel-700">{milestone.text}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-lg border border-steel-300 bg-white p-6">
          <h2 className="text-xl font-semibold">Que aportamos en cada proyecto</h2>
          <ul className="mt-4 space-y-3 text-sm text-steel-700">
            <li>- Seleccion de celulas CPD-M y configuracion de puente segun trafico y normativa aplicable.</li>
            <li>- Ingenieria de aplicacion para SBP/M-SB y BP-3103H (cota cero, rampas, accesos).</li>
            <li>- Terminales DD700 y opciones de comunicacion (serie, USB, Ethernet, fieldbus bajo pedido).</li>
            <li>- Coordinacion de puesta en marcha, formacion de operadores y mantenimiento.</li>
          </ul>
          <img
            src={empresaPhoto}
            alt="Bascula industrial para pesaje de vehiculos"
            className="mt-6 h-52 w-full rounded-md object-cover"
            loading="lazy"
          />
        </article>
      </div>
    </section>
  );
}
