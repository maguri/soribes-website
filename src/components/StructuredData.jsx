import { useMemo } from "react";
import logoImg from "../assets/img/logo.png?url";
import { companyData } from "../data/companyData";

function siteAbsolute(assetPath) {
  const base = companyData.siteUrl.replace(/\/$/, "");
  const path = assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
  return `${base}${path}`;
}

export default function StructuredData() {
  const schema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: companyData.name,
      legalName: companyData.legalName,
      url: companyData.siteUrl,
      logo: siteAbsolute(logoImg),
      telephone: companyData.phone.replace(/\s+/g, ""),
      email: companyData.email,
      foundingDate: companyData.founded,
      address: {
        "@type": "PostalAddress",
        addressCountry: "ES"
      },
      areaServed: "ES",
      sameAs: [companyData.website],
      description: companyData.subtitle
    }),
    []
  );

  return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
}
