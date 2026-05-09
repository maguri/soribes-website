import certificatesImg from "../assets/img/certificates.png?url";
import { certificationBar } from "../data/companyData";

export default function CertificationBar() {
  return (
    <div className="border-y border-steel-300 bg-steel-800 py-8 text-steel-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <img
          src={certificatesImg}
          alt="Certificaciones y homologaciones: CE, OIML R-60, ATEX, IP, NTEP y otras segun producto"
          className="mx-auto max-h-28 w-auto object-contain md:max-h-36"
          loading="lazy"
        />
        <ul className="sr-only">
          {certificationBar.map((item) => (
            <li key={item.badge}>
              {item.badge}: {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
