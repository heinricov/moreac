import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export function SEOHead({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = "/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  noindex = false,
  nofollow = false,
}: SEOProps) {
  const robotsContent = [
    noindex ? "noindex" : "index",
    nofollow ? "nofollow" : "follow",
  ].join(", ");

  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="robots" content={robotsContent} />

      {/* Open Graph */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content={ogType} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Moreac" />
      <meta property="og:locale" content="id_ID" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@moreac" />

      {/* Additional SEO */}
      <meta name="author" content="Moreac Team" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Indonesian" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
    </Head>
  );
}

// Utility function untuk generate meta description
export function generateMetaDescription(
  title: string,
  description: string,
  maxLength: number = 160
): string {
  const fullDescription = `${title} - ${description}`;

  if (fullDescription.length <= maxLength) {
    return fullDescription;
  }

  return description.substring(0, maxLength - 3) + "...";
}

// Utility function untuk generate keywords
export function generateKeywords(
  primaryKeywords: string[],
  secondaryKeywords: string[] = []
): string[] {
  return [...primaryKeywords, ...secondaryKeywords].slice(0, 10);
}

// Utility function untuk validate SEO
export function validateSEO({
  title,
  description,
  keywords,
}: {
  title?: string;
  description?: string;
  keywords?: string[];
}) {
  const errors: string[] = [];

  if (!title || title.length < 30 || title.length > 60) {
    errors.push("Title should be between 30-60 characters");
  }

  if (!description || description.length < 120 || description.length > 160) {
    errors.push("Description should be between 120-160 characters");
  }

  if (!keywords || keywords.length < 3 || keywords.length > 10) {
    errors.push("Keywords should be between 3-10 items");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
