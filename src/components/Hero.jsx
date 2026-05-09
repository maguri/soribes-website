import { Link } from "react-router-dom";
import { catalogImages } from "../data/catalogData";
import { certificationPills, companyData, heroStats } from "../data/companyData";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-steel-900 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${catalogImages.heroSide})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-steel-900 via-steel-900/95 to-steel-900/80" />
      <div className="section-container relative z-10 grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-300">
            Digital Applications Solutions | Bilanciai Group
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
            Sistemas de pesaje industrial para camiones y plataformas
          </h1>
          <p className="mt-5 max-w-xl text-sm text-steel-200 sm:text-base">
            {companyData.subtitle}. Soluciones de pesaje para camiones, plataformas e industria con tecnologia digital
            Bilanciai: celulas CPD-M, basculas SBP/M-SB y BP-3103H, terminales DD700.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/soluciones#productos"
              className="rounded-md bg-industrial-500 px-5 py-3 text-sm font-semibold hover:bg-industrial-400"
            >
              Ver catalogo
            </Link>
            <Link
              to="/#catalogos-basculas"
              className="rounded-md border border-steel-400 bg-steel-900/40 px-5 py-3 text-sm font-semibold hover:bg-steel-800"
            >
              PDF basculas
            </Link>
            <Link
              to="/contacto"
              className="rounded-md border border-steel-400 px-5 py-3 text-sm font-semibold hover:bg-steel-800"
            >
              Contactar
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {certificationPills.map((p) => (
              <span
                key={p.label}
                className={`rounded-full border px-3 py-1 text-xs font-medium ${
                  p.active ? "border-industrial-400 text-industrial-200" : "border-steel-600 text-steel-400"
                }`}
              >
                {p.label}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:border-l lg:border-steel-600 lg:pl-10">
          {heroStats.map((s) => (
            <div key={s.label} className="rounded-lg border border-steel-600/80 bg-steel-800/50 p-4 backdrop-blur">
              <p className="font-mono text-3xl font-black sm:text-4xl">
                {s.num}
                {s.suffix ? <span className="text-industrial-400">{s.suffix}</span> : null}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-steel-400">{s.label}</p>
            </div>
          ))}
          <div className="sm:col-span-2">
            <img
              src={catalogImages.sbp}
              alt="Plataforma metalica para pesaje de vehiculos"
              className="h-44 w-full rounded-lg object-cover ring-1 ring-steel-600"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
