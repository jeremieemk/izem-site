import {
  ARTIST_BIO,
  ARTIST_GENRES,
  ARTIST_PROFILES,
  ARTIST_REAL_NAME,
  HOME_OG_IMAGE_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";

// structured data (schema.org) read by Google and AI assistants
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const ARTIST_ID = `${SITE_URL}/#izem`;

export const artistJsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  "@id": ARTIST_ID,
  name: SITE_NAME,
  alternateName: ARTIST_REAL_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/assets/blog/about.jpg`,
  description: ARTIST_BIO,
  genre: ARTIST_GENRES,
  sameAs: ARTIST_PROFILES,
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  image: `${SITE_URL}${HOME_OG_IMAGE_URL}`,
  publisher: { "@id": ARTIST_ID },
};
