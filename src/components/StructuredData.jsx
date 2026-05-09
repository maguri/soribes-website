import { useMemo } from "react";
import { companyData } from "../data/companyData";

export default function StructuredData() {
  const schema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: companyData.name,
      legalName: companyData.legalName,
      url: "https://www.soribes.com",
      logo: "https://www.soribes.com/images/logo-soribes.svg",
      telephone: companyData.phone,
      email: companyData.email,
      foundingDate: companyData.founded,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Calle del Acero 12",
        addressLocality: "Valencia",
        postalCode: "46026",
        addressCountry: "ES"
      },
      areaServed: "ES",
      sameAs: []
    }),
    []
  );

  return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
}
