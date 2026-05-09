import SectionTitle from "../components/SectionTitle";
import Seo from "../components/Seo";

const cards = [
  {
    title: "Basculas puente para vehiculos",
    description: "Estructuras robustas para control de entrada y salida de mercancias en centros logisticos e industria pesada."
  },
  {
    title: "Plataformas de pesaje",
    description: "Soluciones compactas para lineas de produccion, almacenes y expediciones con alto volumen de carga."
  },
  {
    title: "Pesaje para proceso",
    description: "Integracion de celdas y electronica para control en tiempo real en dosificacion y transformacion."
  },
  {
    title: "Software e integracion",
    description: "Conectamos los datos de pesaje con ERP, MES y sistemas de trazabilidad para decisiones operativas mas rapidas."
  }
];

export default function SolucionesPage() {
  return (
    <section className="section-container">
      <Seo
        title="Soluciones de pesaje industrial"
        description="Catalogo de soluciones de pesaje: basculas puente, plataformas, sistemas de proceso e integracion de software industrial."
        path="/soluciones"
      />
      <SectionTitle
        eyebrow="Soluciones"
        title="Equipos y sistemas orientados a rendimiento"
        description="Desarrollamos soluciones de pesaje industrial para maximizar productividad, trazabilidad y control de costes."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {cards.map((card) => (
          <article key={card.title} className="rounded-lg border border-steel-300 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-steel-900">{card.title}</h3>
            <p className="mt-3 text-sm text-steel-600">{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
