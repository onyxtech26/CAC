import { useEffect } from "react";
import { CONTACT } from "../data";

export const SITE_URL = "https://www.cac.com.my";

type Props = {
  title: string;
  description: string;
  /** path only, e.g. "/services" — combined with SITE_URL for the canonical */
  path: string;
};

function setMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Per-page title, description, canonical and Open Graph tags.
 *
 * Note on reach: Google renders JavaScript, so these are picked up for search.
 * Social scrapers (WhatsApp, Facebook, LinkedIn) do NOT execute JS — they read
 * the raw HTML, so they will always see the defaults baked into index.html.
 * Per-page social previews need prerendering or SSR; this covers search.
 */
export function Seo({ title, description, path }: Props) {
  useEffect(() => {
    // several page titles already contain "CAC"; don't append it twice
    const full = title.includes(CONTACT.short)
      ? `${title} · ${CONTACT.company}`
      : `${title} · ${CONTACT.short}`;
    document.title = full;

    setMeta('meta[name="description"]', "name", "description", description);

    setMeta('meta[property="og:title"]', "property", "og:title", full);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", `${SITE_URL}${path}`);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", full);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", `${SITE_URL}${path}`);
  }, [title, description, path]);

  return null;
}
