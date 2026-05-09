import {
  bpAdvantages,
  bpApplications,
  bpConfigs,
  bpConstruction,
  catalogImages,
  cpdDetail,
  dd700Certs,
  dd700Highlights,
  dd700Options,
  dd700Ports,
  dd700Tech,
  dd700Variants,
  productCards,
  sbpAccessories,
  sbpApplications,
  sbpModels,
  sbpStrengths
} from "../data/catalogData";
import { catalogPdfs } from "../data/catalogPdfs";
import PdfDownloadLink from "./PdfDownloadLink";

function SpecRow({ specKey, value, highlight }) {
  return (
    <div className="flex justify-between gap-4 border-t border-steel-200 py-2 text-sm first:border-t-0">
      <span className="text-steel-500">{specKey}</span>
      <span className={`text-right font-semibold ${highlight ? "text-amber-600" : "text-steel-900"}`}>{value}</span>
    </div>
  );
}

export default function CatalogSoluciones() {
  return (
    <div className="space-y-16">
      <section id="productos" className="scroll-mt-24">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-industrial-700">Catalogo de productos</p>
        <h2 className="mt-2 text-3xl font-bold text-steel-900 sm:text-4xl">Gama completa de soluciones</h2>
        <p className="mt-3 max-w-2xl text-sm text-steel-600">
          Basculas para camiones, celulas digitales y terminales Bilanciai. Datos extraidos de documentacion tecnica
          comercial.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <PdfDownloadLink href={catalogPdfs.sbp.url} downloadName={catalogPdfs.sbp.downloadName} variant="button">
            PDF SBP/M-SB
          </PdfDownloadLink>
          <PdfDownloadLink href={catalogPdfs.bpCaracteristicas.url} downloadName={catalogPdfs.bpCaracteristicas.downloadName} variant="button">
            PDF BP-3103H (ficha)
          </PdfDownloadLink>
          <PdfDownloadLink href={catalogPdfs.bpHormigon.url} downloadName={catalogPdfs.bpHormigon.downloadName} variant="button">
            PDF BP-3103H (hormigon)
          </PdfDownloadLink>
          <PdfDownloadLink href={catalogPdfs.cpdM.url} downloadName={catalogPdfs.cpdM.downloadName} variant="button">
            PDF CPD-M
          </PdfDownloadLink>
          <PdfDownloadLink href={catalogPdfs.dd700.url} downloadName={catalogPdfs.dd700.downloadName} variant="button">
            PDF DD700
          </PdfDownloadLink>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {productCards.map((card) => (
            <article
              key={card.id}
              className="flex flex-col rounded-xl border border-steel-300 bg-white p-6 shadow-sm transition hover:border-industrial-400"
            >
              <p className="text-5xl font-black leading-none text-steel-200">{card.number}</p>
              <h3 className="mt-3 font-mono text-xl font-bold uppercase tracking-wide text-steel-900">{card.model}</h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-industrial-600">{card.name}</p>
              <p className="mt-3 flex-1 text-sm text-steel-600">{card.description}</p>
              <div className="mt-4 border-t border-steel-200 pt-2">
                {card.specs.map((s) => (
                  <SpecRow key={s.key} specKey={s.key} value={s.value} highlight={s.highlight} />
                ))}
              </div>
              {card.secondary ? (
                <div className="mt-6 border-t border-steel-200 pt-6">
                  <p className="text-3xl font-black text-steel-200">{card.secondary.number}</p>
                  <h3 className="mt-2 font-mono text-lg font-bold uppercase text-steel-900">{card.secondary.model}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-industrial-600">{card.secondary.name}</p>
                  <p className="mt-2 text-sm text-steel-600">{card.secondary.description}</p>
                  <div className="mt-3">
                    {card.secondary.specs.map((s) => (
                      <SpecRow key={s.key} specKey={s.key} value={s.value} highlight={s.highlight} />
                    ))}
                  </div>
                </div>
              ) : null}
              <div className="mt-4 space-y-2 border-t border-steel-100 pt-4">
                {card.id === "cpd-m" ? (
                  <PdfDownloadLink href={catalogPdfs.cpdM.url} downloadName={catalogPdfs.cpdM.downloadName} variant="text">
                    Descargar folleto CPD-M (PDF)
                  </PdfDownloadLink>
                ) : null}
                {card.id === "sbp" ? (
                  <PdfDownloadLink href={catalogPdfs.sbp.url} downloadName={catalogPdfs.sbp.downloadName} variant="text">
                    Descargar catalogo SBP/M-SB (PDF)
                  </PdfDownloadLink>
                ) : null}
                {card.id === "bp3103h" ? (
                  <div className="flex flex-col gap-2">
                    <PdfDownloadLink
                      href={catalogPdfs.bpCaracteristicas.url}
                      downloadName={catalogPdfs.bpCaracteristicas.downloadName}
                      variant="text"
                    >
                      BP-3103H caracteristicas (PDF)
                    </PdfDownloadLink>
                    <PdfDownloadLink
                      href={catalogPdfs.bpHormigon.url}
                      downloadName={catalogPdfs.bpHormigon.downloadName}
                      variant="text"
                    >
                      BP-3103H hormigon DAS (PDF)
                    </PdfDownloadLink>
                    <PdfDownloadLink href={catalogPdfs.dd700.url} downloadName={catalogPdfs.dd700.downloadName} variant="text">
                      Terminal DD700 (PDF)
                    </PdfDownloadLink>
                  </div>
                ) : null}
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={`#${card.id}`} className="text-sm font-semibold text-industrial-700 hover:underline">
                  Ver {card.model}
                </a>
                {card.secondary ? (
                  <a href="#dd700" className="text-sm font-semibold text-industrial-700 hover:underline">
                    Ver {card.secondary.model}
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="cpd-m" className="scroll-mt-24 rounded-xl border border-steel-300 bg-steel-100/80">
        <div className="grid gap-8 p-6 lg:grid-cols-2 lg:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-industrial-700">Celula digital</p>
            <h2 className="mt-2 text-3xl font-bold text-steel-900">CPD-M</h2>
            <p className="mt-3 text-sm text-steel-600">{cpdDetail.intro}</p>
            <div className="mt-4">
              <PdfDownloadLink href={catalogPdfs.cpdM.url} downloadName={catalogPdfs.cpdM.downloadName}>
                Descargar PDF celulas digitales CPD-M
              </PdfDownloadLink>
            </div>
            <img
              src={catalogImages.cpd}
              alt="Celula de carga digital CPD-M"
              className="mt-6 h-48 w-full rounded-lg object-cover lg:hidden"
              loading="lazy"
            />
            <h3 className="mt-8 text-sm font-bold uppercase tracking-wider text-steel-900">Caracteristicas</h3>
            <ul className="mt-3 space-y-3">
              {cpdDetail.features.map((f) => (
                <li key={f.title} className="flex gap-3 border-b border-steel-200 pb-3 text-sm text-steel-600">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-industrial-600 text-xs font-bold text-white">
                    OK
                  </span>
                  <span>
                    <strong className="block text-steel-900">{f.title}</strong>
                    {f.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src={catalogImages.cpd}
              alt="Celula de carga para bascula industrial"
              className="mb-6 hidden h-56 w-full rounded-lg object-cover lg:block"
              loading="lazy"
            />
            <h3 className="text-sm font-bold uppercase tracking-wider text-steel-900">Especificaciones</h3>
            <div className="mt-3 overflow-x-auto rounded-lg border border-steel-300 bg-white">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-steel-200 bg-steel-100">
                    <th className="p-3 text-xs font-bold uppercase tracking-wider text-industrial-700">Parametro</th>
                    <th className="p-3 text-xs font-bold uppercase tracking-wider text-industrial-700">Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {cpdDetail.specsRows.map(([k, v]) => (
                    <tr key={k} className="border-b border-steel-100">
                      <td className="p-3 text-steel-500">{k}</td>
                      <td className="p-3 font-medium text-steel-900">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-steel-600">{cpdDetail.quality}</p>
            <h3 className="mt-6 text-sm font-bold uppercase tracking-wider text-steel-900">Resumen celulas</h3>
            <div className="mt-2 overflow-x-auto rounded-lg border border-steel-300 bg-white">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-steel-200 bg-steel-100">
                    <th className="p-2 text-xs font-bold uppercase text-industrial-700">Modelo</th>
                    <th className="p-2 text-xs font-bold uppercase text-industrial-700">Tipo</th>
                    <th className="p-2 text-xs font-bold uppercase text-industrial-700">Clase</th>
                    <th className="p-2 text-xs font-bold uppercase text-industrial-700">Max. div.</th>
                  </tr>
                </thead>
                <tbody>
                  {cpdDetail.summaryRows.map(([a, b, c, d]) => (
                    <tr key={a} className="border-b border-steel-100">
                      <td className="p-2 font-semibold">{a}</td>
                      <td className="p-2 text-steel-600">{b}</td>
                      <td className="p-2 text-steel-600">{c}</td>
                      <td className="p-2 text-steel-600">{d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="sbp" className="scroll-mt-24">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-industrial-700">Bascula puente metalica</p>
        <h2 className="mt-2 text-3xl font-bold text-steel-900">SBP/M-SB</h2>
        <p className="mt-3 max-w-3xl text-sm text-steel-600">
          Modular, facil de transportar y con funcionamiento garantizado en el tiempo. Adecuada para vehiculos de carretera
          y medios de obra hasta 80 t.
        </p>
        <div className="mt-4">
          <PdfDownloadLink href={catalogPdfs.sbp.url} downloadName={catalogPdfs.sbp.downloadName}>
            Descargar PDF bascula puente SBP/M-SB
          </PdfDownloadLink>
        </div>
        <img
          src={catalogImages.sbp}
          alt="Bascula puente metalica modular SBP/M-SB"
          className="mt-6 h-56 w-full rounded-xl object-cover"
          loading="lazy"
        />
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-sm font-bold uppercase text-steel-900">Fortalezas</h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {sbpStrengths.map((s) => (
                <div key={s.title} className="rounded-lg border border-steel-300 bg-white p-4">
                  <p className="text-xs font-bold uppercase text-steel-900">{s.title}</p>
                  <p className="mt-1 text-xs text-steel-600">{s.text}</p>
                </div>
              ))}
            </div>
            <h3 className="mt-8 text-sm font-bold uppercase text-steel-900">Aplicaciones</h3>
            <p className="mt-2 text-sm text-steel-600">{sbpApplications}</p>
            <h3 className="mt-6 text-sm font-bold uppercase text-steel-900">Accesorios</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {sbpAccessories.map((a) => (
                <span key={a} className="rounded-full border border-steel-300 bg-white px-3 py-1 text-xs text-steel-700">
                  {a}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase text-steel-900">Modelos disponibles</h3>
            <div className="mt-3 overflow-x-auto rounded-lg border border-steel-300 bg-white">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-steel-200 bg-steel-100">
                    <th className="p-2 font-bold uppercase text-industrial-700">Modelo</th>
                    <th className="p-2 font-bold uppercase text-industrial-700">Long. (m)</th>
                    <th className="p-2 font-bold uppercase text-industrial-700">Celdas</th>
                    <th className="p-2 font-bold uppercase text-industrial-700">Alcance (t)</th>
                    <th className="p-2 font-bold uppercase text-industrial-700">Div. (kg)</th>
                  </tr>
                </thead>
                <tbody>
                  {sbpModels.map((row) => (
                    <tr key={row[0]} className="border-b border-steel-100">
                      {row.map((cell) => (
                        <td key={cell} className="p-2 text-steel-700">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-steel-500">
              Todos los modelos con anchura de plataforma 3 m. Multirange en 63, 143, 163, 183, 203 y 213.
            </p>
          </div>
        </div>
      </section>

      <section id="bp3103h" className="scroll-mt-24 rounded-xl border border-steel-300 bg-white">
        <div className="p-6 lg:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-industrial-700">Bascula puente - hormigon</p>
          <h2 className="mt-2 text-3xl font-bold text-steel-900">BP-3103H</h2>
          <p className="mt-3 max-w-3xl text-sm text-steel-600">
            Bascula puente mixta (estructura de acero + losa de hormigon in situ) para pesaje homologado de vehiculos
            industriales. Instalacion sobresuelo (cota 0).
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <PdfDownloadLink href={catalogPdfs.bpCaracteristicas.url} downloadName={catalogPdfs.bpCaracteristicas.downloadName}>
              PDF caracteristicas BP-3103H
            </PdfDownloadLink>
            <PdfDownloadLink href={catalogPdfs.bpHormigon.url} downloadName={catalogPdfs.bpHormigon.downloadName}>
              PDF hormigon BP-3103H (DAS)
            </PdfDownloadLink>
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <img
                src={catalogImages.bp3103h}
                alt="Bascula puente para pesaje de camiones BP-3103H"
                className="h-48 w-full rounded-lg object-cover"
                loading="lazy"
              />
              <h3 className="mt-6 text-sm font-bold uppercase text-steel-900">Ventajas</h3>
              <ol className="mt-3 space-y-3">
                {bpAdvantages.map((adv, i) => (
                  <li key={adv.title} className="flex gap-3 border-b border-steel-100 pb-3 text-sm text-steel-600">
                    <span className="font-mono text-lg font-black text-orange-600">0{i + 1}</span>
                    <span>
                      <strong className="mb-1 block text-steel-900">{adv.title}</strong>
                      {adv.text}
                    </span>
                  </li>
                ))}
              </ol>
              <h3 className="mt-6 text-sm font-bold uppercase text-steel-900">Aplicaciones</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {bpApplications.map((a) => (
                  <span key={a} className="rounded-full border border-industrial-200 bg-industrial-50 px-3 py-1 text-xs">
                    {a}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase text-steel-900">Configuraciones estandar</h3>
              <div className="mt-3 space-y-2 text-xs">
                <div className="grid grid-cols-4 gap-2 font-bold uppercase text-steel-500">
                  <span>Modelo</span>
                  <span>Plataforma</span>
                  <span>Celulas</span>
                  <span>Capacidad</span>
                </div>
                {bpConfigs.map((row) => (
                  <div
                    key={row[1]}
                    className="grid grid-cols-4 gap-2 rounded-lg border border-steel-200 bg-steel-50 p-3 text-sm"
                  >
                    <span className="font-bold">{row[0]}</span>
                    <span>{row[1]}</span>
                    <span>{row[2]}</span>
                    <span className="font-semibold text-amber-700">{row[3]}</span>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-xs text-steel-500">
                Division: 10 kg (8m), 20 kg (12-18m). Dimensiones y capacidades especiales bajo pedido.
              </p>
              <h3 className="mt-8 text-sm font-bold uppercase text-steel-900">Construccion puente-plataforma</h3>
              <p className="mt-2 text-sm text-steel-600">{bpConstruction}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="dd700" className="scroll-mt-24">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-industrial-700">Terminal de pesaje</p>
        <h2 className="mt-2 text-3xl font-bold text-steel-900">DD700</h2>
        <p className="mt-3 max-w-3xl text-sm text-steel-600">
          Indicadores de peso de alta gama de Coop Bilanciai. Compatible con celulas analogicas y digitales. Filtro
          DIGITAL FIR de alta velocidad.
        </p>
        <div className="mt-4">
          <PdfDownloadLink href={catalogPdfs.dd700.url} downloadName={catalogPdfs.dd700.downloadName}>
            Descargar PDF terminal DD700
          </PdfDownloadLink>
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div>
            <img
              src={catalogImages.dd700}
              alt="Terminal de pesaje automatico DD700"
              className="h-48 w-full rounded-xl object-cover"
              loading="lazy"
            />
            <h3 className="mt-6 text-sm font-bold uppercase text-steel-900">Versiones</h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {dd700Variants.map((v) => (
                <div key={v.model} className="rounded-lg border border-steel-300 bg-white p-4 text-center">
                  <p className="font-mono font-bold text-industrial-700">{v.model}</p>
                  <p className="mt-1 text-xs text-steel-600">{v.desc}</p>
                  <p className="mt-2 text-xs font-bold text-amber-700">{v.ip}</p>
                </div>
              ))}
            </div>
            <h3 className="mt-6 text-sm font-bold uppercase text-steel-900">Destacados</h3>
            <ul className="mt-3 space-y-2">
              {dd700Highlights.map((h) => (
                <li key={h.title} className="flex gap-2 text-sm text-steel-600">
                  <span className="text-industrial-600">-</span>
                  <span>
                    <strong className="text-steel-900">{h.title}:</strong> {h.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase text-steel-900">Especificaciones</h3>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {dd700Tech.map(([k, v]) => (
                <div key={k} className="rounded-lg border border-steel-300 bg-white p-3">
                  <p className="text-[0.65rem] font-bold uppercase tracking-wider text-steel-500">{k}</p>
                  <p className="mt-1 text-sm font-semibold text-steel-900">{v}</p>
                </div>
              ))}
            </div>
            <h3 className="mt-6 text-sm font-bold uppercase text-steel-900">Puertos</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {dd700Ports.map((p) => (
                <span key={p} className="rounded-full bg-industrial-100 px-3 py-1 text-xs font-medium text-industrial-800">
                  {p}
                </span>
              ))}
            </div>
            <h3 className="mt-6 text-sm font-bold uppercase text-steel-900">Opciones</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {dd700Options.map((o) => (
                <span key={o} className="rounded-full border border-steel-200 px-3 py-1 text-xs text-steel-700">
                  {o}
                </span>
              ))}
            </div>
            <h3 className="mt-6 text-sm font-bold uppercase text-steel-900">Certificaciones</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {dd700Certs.map((c) => (
                <span key={c} className="rounded-full border border-industrial-300 bg-white px-3 py-1 text-xs">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
