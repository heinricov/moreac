import projectConfig from "./project-config.json";

// Type definitions untuk type safety
export interface ProjectConfig {
  project: {
    name: string;
    fullName: string;
    version: string;
    description: string;
    longDescription: string;
    url: string;
    logo: string;
    favicon: string;
    language: string;
    locale: string;
    currency: string;
    timezone: string;
    images?: {
      product?: {
        main?: string;
        dark?: string;
      };
    };
  };
  company: {
    name: string;
    legalName: string;
    description: string;
    founded: string;
    location: {
      country: string;
      city: string;
      address: string;
    };
    contact: {
      email: string;
      phone: string;
      website: string;
    };
    social: {
      twitter: string;
      facebook: string;
      instagram: string;
      linkedin: string;
      github: string;
    };
  };
  seo: {
    defaultTitle: string;
    titleTemplate: string;
    defaultDescription: string;
    keywords: string[];
    verification: {
      google: string;
      yandex: string;
      yahoo: string;
    };
  };
  pages: {
    [key: string]: {
      title: string;
      description: string;
      keywords: string[];
      ogImage: string;
    };
  };
  content: {
    hero: {
      title: string;
      description: string;
      cta: {
        primary: string;
        secondary: string;
      };
    };
    features: {
      title: string;
      description: string;
    };
    cta: {
      title: string;
      subtitle: string;
      description: string;
      buttons: {
        primary: string;
        secondary: string;
      };
    };
  };
  product: {
    name: string;
    description: string;
    price: string;
    currency: string;
    availability: string;
    rating: {
      value: string;
      count: string;
    };
    images: string[];
    features: Array<{
      key: string;
      title: string;
      description: string;
      image: string;
    }>;
  };
  tech: {
    stack: string[];
    tools: Array<{
      name: string;
      shortName: string;
      description: string;
      downloadUrl: string;
      version: string;
    }>;
  };
  download: {
    steps: Array<{
      id: number;
      title: string;
      description: string;
      details: string[];
      code: string;
    }>;
  };
  sitemap: {
    baseUrl: string;
    pages: Array<{
      url: string;
      priority: number;
      changeFrequency: string;
    }>;
  };
  manifest: {
    name: string;
    shortName: string;
    description: string;
    startUrl: string;
    display: string;
    backgroundColor: string;
    themeColor: string;
    categories: string[];
    lang: string;
    orientation: string;
  };
  images: {
    og: {
      [key: string]: string;
    };
    icons: {
      [key: string]: string;
    };
    product: {
      [key: string]: string;
    };
  };
}

// Export the config with type safety
export const config = projectConfig as ProjectConfig;

// Utility functions untuk mengakses konfigurasi
export const getProjectInfo = () => config.project;
export const getCompanyInfo = () => config.company;
export const getSEOConfig = () => config.seo;
export const getPageConfig = (pageName: string) => config.pages[pageName];
export const getContentConfig = () => config.content;
export const getProductConfig = () => config.product;
export const getTechConfig = () => config.tech;
export const getDownloadConfig = () => config.download;
export const getSitemapConfig = () => config.sitemap;
export const getManifestConfig = () => config.manifest;
export const getImagesConfig = () => config.images;

// Helper functions untuk metadata
export const generatePageMetadata = (pageName: string) => {
  const pageConfig = getPageConfig(pageName);
  const seoConfig = getSEOConfig();

  return {
    title: pageConfig?.title || seoConfig.defaultTitle,
    description: pageConfig?.description || seoConfig.defaultDescription,
    keywords: pageConfig?.keywords || seoConfig.keywords,
    openGraph: {
      title: `${pageConfig?.title || seoConfig.defaultTitle} | ${
        getProjectInfo().name
      }`,
      description: pageConfig?.description || seoConfig.defaultDescription,
      url: `${getProjectInfo().url}${
        pageName === "home" ? "" : `/${pageName}`
      }`,
      images: [
        {
          url: pageConfig?.ogImage || getImagesConfig().og.default,
          width: 1200,
          height: 630,
          alt: `${pageConfig?.title || seoConfig.defaultTitle}`,
        },
      ],
    },
    twitter: {
      title: `${pageConfig?.title || seoConfig.defaultTitle} | ${
        getProjectInfo().name
      }`,
      description: pageConfig?.description || seoConfig.defaultDescription,
      images: [pageConfig?.ogImage || getImagesConfig().og.default],
    },
    alternates: {
      canonical: `${getProjectInfo().url}${
        pageName === "home" ? "" : `/${pageName}`
      }`,
    },
  };
};

// Helper function untuk generate structured data
export const generateStructuredData = (
  type: "organization" | "website" | "product" | "service"
) => {
  const project = getProjectInfo();
  const company = getCompanyInfo();
  const product = getProductConfig();

  switch (type) {
    case "organization":
      return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: company.name,
        description: company.description,
        url: project.url,
        logo: project.logo,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: company.contact.phone,
          contactType: "customer service",
          email: company.contact.email,
        },
        sameAs: [
          company.social.twitter,
          company.social.facebook,
          company.social.instagram,
          company.social.linkedin,
        ],
        address: {
          "@type": "PostalAddress",
          addressCountry: company.location.country,
          addressLocality: company.location.city,
        },
      };

    case "website":
      return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: project.fullName,
        description: project.description,
        url: project.url,
        potentialAction: {
          "@type": "SearchAction",
          target: `${project.url}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      };

    case "product":
      return {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: product.images,
        brand: {
          "@type": "Brand",
          name: company.name,
        },
        offers: {
          "@type": "Offer",
          price: product.price,
          priceCurrency: product.currency,
          availability: `https://schema.org/${product.availability}`,
          url: `${project.url}/products`,
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: product.rating.value,
          reviewCount: product.rating.count,
        },
      };

    case "service":
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Template Website Development",
        description:
          "Layanan pengembangan template website profesional dengan teknologi modern",
        provider: {
          "@type": "Organization",
          name: company.name,
        },
        serviceType: "Web Development",
        areaServed: company.location.country,
      };

    default:
      return {};
  }
};

// Export default config
export default config;
