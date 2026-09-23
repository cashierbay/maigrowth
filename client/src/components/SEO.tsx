import { Helmet } from 'react-helmet-async';
import { useLocation } from 'wouter';

interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: string;
  schema?: Record<string, any>;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export default function SEO({
  title,
  description,
  ogImage = '/og-image.png',
  ogType = 'website',
  schema,
  breadcrumbs,
}: SEOProps) {
  // Site serves on the www host (bare maigrowth.com 307-redirects to www), so
  // canonical / OG / schema URLs must point at www to avoid a redirect chain.
  const siteUrl = 'https://www.maigrowth.com';
  const fullTitle = `${title} | MaiGrowth`;

  // Self-referencing canonical for the current route (query/hash dropped).
  const [location] = useLocation();
  const canonicalUrl = `${siteUrl}${location === '/' ? '' : location}`;

  // Build breadcrumb schema if provided
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": crumb.name,
      "item": `${siteUrl}${crumb.url}`
    }))
  } : null;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
}
