import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-steel-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(93,152,245,0.3),_transparent_55%)]" />
      <div className="section-container relative z-10 grid items-center gap-8 lg:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-industrial-200">Fabricante industrial desde 1962</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
            Soluciones de pesaje fiables para produccion, logistica y expedicion
          </h1>
          <p className="mt-5 max-w-xl text-steel-200">
            Disenamos, fabricamos e instalamos basculas industriales adaptadas a tu operativa real. Mejoramos
            trazabilidad, control y precision en cada proceso.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/soluciones" className="rounded-md bg-industrial-500 px-5 py-3 text-sm font-semibold hover:bg-industrial-400">
              Ver soluciones
            </Link>
            <Link to="/contacto" className="rounded-md border border-steel-500 px-5 py-3 text-sm font-semibold hover:bg-steel-800">
              Solicitar asesoramiento
            </Link>
          </div>
        </div>
        <div className="rounded-xl border border-steel-700 bg-steel-800/70 p-6 shadow-industrial">
          <img
            src="/images/hero-industrial.svg"
            alt="Plataforma de pesaje industrial instalada en una planta de produccion"
            className="h-72 w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
