import { useEffect } from "react";
import { companyData } from "../data/companyData";

function upsertMeta(selector, attr, value) {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement("meta");
    document.head.appendChild(tag);
  }
  tag.setAttribute(attr, value);
}

export default function Seo({ title, description, path = "/", image }) {
  const ogImage = image ?? companyData.ogImage;

  useEffect(() => {
    const fullTitle = `${title} | ${companyData.seoBrandSuffix}`;
    const canonical = `${companyData.siteUrl}${path}`;
    const imageUrl = ogImage.startsWith("http") ? ogImage : `${companyData.siteUrl}${ogImage}`;

    document.title = fullTitle;

    upsertMeta('meta[name="description"]', "name", "description");
    document.head.querySelector('meta[name="description"]')?.setAttribute("content", description);

    upsertMeta('meta[property="og:title"]', "property", "og:title");
    document.head.querySelector('meta[property="og:title"]')?.setAttribute("content", fullTitle);

    upsertMeta('meta[property="og:description"]', "property", "og:description");
    document.head.querySelector('meta[property="og:description"]')?.setAttribute("content", description);

    upsertMeta('meta[property="og:url"]', "property", "og:url");
    document.head.querySelector('meta[property="og:url"]')?.setAttribute("content", canonical);

    upsertMeta('meta[property="og:image"]', "property", "og:image");
    document.head.querySelector('meta[property="og:image"]')?.setAttribute("content", imageUrl);

    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title");
    document.head.querySelector('meta[name="twitter:title"]')?.setAttribute("content", fullTitle);

    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description");
    document.head.querySelector('meta[name="twitter:description"]')?.setAttribute("content", description);

    upsertMeta('meta[name="twitter:image"]', "name", "twitter:image");
    document.head.querySelector('meta[name="twitter:image"]')?.setAttribute("content", imageUrl);

    let canonicalTag = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", canonical);
  }, [title, description, path, ogImage]);

  return null;
}
