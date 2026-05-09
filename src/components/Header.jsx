import { NavLink } from "react-router-dom";
import { companyData, navItems } from "../data/companyData";

function linkClass({ isActive }) {
  return `rounded-md px-3 py-2 text-sm font-semibold transition ${
    isActive ? "bg-industrial-600 text-white" : "text-steel-700 hover:bg-steel-200 hover:text-steel-900"
  }`;
}

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-steel-300 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <img src="/images/logo-soribes.svg" alt="Logo SORIBES" className="h-10 w-10" />
          <div>
            <p className="text-lg font-extrabold tracking-tight text-steel-900">{companyData.name}</p>
            <p className="text-xs uppercase tracking-wide text-steel-600">Basculas Industriales</p>
          </div>
        </NavLink>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegacion principal">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <a
          href={`tel:${companyData.phone.replace(/\s+/g, "")}`}
          className="rounded-md bg-industrial-700 px-4 py-2 text-sm font-semibold text-white hover:bg-industrial-800"
        >
          {companyData.phone}
        </a>
      </div>
    </header>
  );
}
