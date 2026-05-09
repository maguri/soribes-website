import { Link } from "react-router-dom";
import { companyData, navItems } from "../data/companyData";

export default function Footer() {
  return (
    <footer className="border-t border-steel-300 bg-steel-900 text-steel-100">
      <div className="section-container grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-bold">{companyData.name}</h3>
          <p className="mt-2 text-sm text-steel-300">
            Fabricacion e integracion de soluciones de pesaje industrial para entornos exigentes.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-steel-300">Navegacion</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link className="text-steel-200 hover:text-white" to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-steel-300">Contacto</h4>
          <ul className="mt-3 space-y-2 text-sm text-steel-200">
            <li>{companyData.address}</li>
            <li>
              <a href={`tel:${companyData.phone.replace(/\s+/g, "")}`} className="hover:text-white">
                {companyData.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${companyData.email}`} className="hover:text-white">
                {companyData.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-steel-700 py-4 text-center text-xs text-steel-400">
        (c) {new Date().getFullYear()} {companyData.legalName}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
