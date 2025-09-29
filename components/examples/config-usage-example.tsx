/**
 * CONTOH PENGGUNAAN PROJECT CONFIGURATION
 *
 * File ini menunjukkan cara menggunakan project-config.json
 * untuk mengelola semua informasi project secara terpusat.
 */

import {
  config,
  getProjectInfo,
  getCompanyInfo,
  getPageConfig,
  getContentConfig,
  getProductConfig,
  generatePageMetadata,
  generateStructuredData,
} from "@/lib/config";

// ========================================
// CONTOH 1: Menggunakan di Component
// ========================================

export function ProjectInfoComponent() {
  const project = getProjectInfo();
  const company = getCompanyInfo();

  return (
    <div>
      <h1>{project.fullName}</h1>
      <p>{project.description}</p>
      <p>Versi: {project.version}</p>
      <p>Website: {project.url}</p>
      <p>Perusahaan: {company.name}</p>
      <p>Email: {company.contact.email}</p>
    </div>
  );
}

// ========================================
// CONTOH 2: Menggunakan di Metadata
// ========================================

// Di file app/page.tsx
export const metadata = generatePageMetadata("home");

// Atau manual:
export function generateCustomMetadata() {
  const homeConfig = getPageConfig("home");
  const seoConfig = config.seo;

  return {
    title: homeConfig.title,
    description: homeConfig.description,
    keywords: homeConfig.keywords,
    openGraph: {
      title: `${homeConfig.title} | ${config.project.name}`,
      description: homeConfig.description,
      url: config.project.url,
      images: [homeConfig.ogImage],
    },
  };
}

// ========================================
// CONTOH 3: Menggunakan di Hero Section
// ========================================

export function HeroSectionWithConfig() {
  const content = getContentConfig();
  const project = getProjectInfo();

  return (
    <section>
      <h1>{content.hero.title}</h1>
      <p>{content.hero.description}</p>
      <div>
        <button>{content.hero.cta.primary}</button>
        <button>{content.hero.cta.secondary}</button>
      </div>
    </section>
  );
}

// ========================================
// CONTOH 4: Menggunakan di Product Info
// ========================================

export function ProductInfoWithConfig() {
  const product = getProductConfig();
  const tech = config.tech;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>
        Harga: {product.price} {product.currency}
      </p>
      <p>
        Rating: {product.rating.value}/5 ({product.rating.count} reviews)
      </p>

      <h3>Tech Stack:</h3>
      <ul>
        {tech.stack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      <h3>Features:</h3>
      <ul>
        {product.features.map((feature, index) => (
          <li key={index}>
            <strong>{feature.title}</strong>: {feature.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ========================================
// CONTOH 5: Menggunakan di Structured Data
// ========================================

export function StructuredDataExample() {
  const organizationSchema = generateStructuredData("organization");
  const productSchema = generateStructuredData("product");
  const websiteSchema = generateStructuredData("website");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}

// ========================================
// CONTOH 6: Menggunakan di Download Steps
// ========================================

export function DownloadStepsWithConfig() {
  const downloadConfig = config.download;

  return (
    <div>
      <h2>Langkah-langkah Download</h2>
      {downloadConfig.steps.map((step, index) => (
        <div key={step.id}>
          <h3>
            {step.id}. {step.title}
          </h3>
          <p>{step.description}</p>
          <ul>
            {step.details.map((detail, detailIndex) => (
              <li key={detailIndex}>{detail}</li>
            ))}
          </ul>
          <pre>
            <code>{step.code}</code>
          </pre>
        </div>
      ))}
    </div>
  );
}

// ========================================
// CONTOH 7: Menggunakan di Social Links
// ========================================

export function SocialLinksWithConfig() {
  const social = config.company.social;

  return (
    <div>
      <a href={social.twitter} target="_blank" rel="noopener noreferrer">
        Twitter
      </a>
      <a href={social.facebook} target="_blank" rel="noopener noreferrer">
        Facebook
      </a>
      <a href={social.instagram} target="_blank" rel="noopener noreferrer">
        Instagram
      </a>
      <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
      <a href={social.github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </div>
  );
}

// ========================================
// CONTOH 8: Menggunakan di Contact Info
// ========================================

export function ContactInfoWithConfig() {
  const contact = config.company.contact;
  const company = config.company;

  return (
    <div>
      <h3>Hubungi Kami</h3>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Website: {contact.website}</p>
      <p>Alamat: {company.location.address}</p>
    </div>
  );
}

// ========================================
// CONTOH 9: Dynamic Page Generation
// ========================================

export function generateAllPageMetadata() {
  const pages = ["home", "products", "about", "contact", "pricing", "download"];

  return pages.map((pageName) => ({
    page: pageName,
    metadata: generatePageMetadata(pageName),
  }));
}

// ========================================
// CONTOH 10: Configuration Validation
// ========================================

export function validateConfiguration() {
  const errors: string[] = [];

  // Validasi project info
  if (!config.project.name) errors.push("Project name is required");
  if (!config.project.url) errors.push("Project URL is required");

  // Validasi company info
  if (!config.company.contact.email) errors.push("Company email is required");

  // Validasi SEO
  if (!config.seo.defaultTitle) errors.push("Default SEO title is required");
  if (!config.seo.defaultDescription)
    errors.push("Default SEO description is required");

  return {
    isValid: errors.length === 0,
    errors,
  };
}

// ========================================
// CONTOH 11: Environment-based Configuration
// ========================================

export function getEnvironmentConfig() {
  const isDevelopment = process.env.NODE_ENV === "development";
  const isProduction = process.env.NODE_ENV === "production";

  return {
    ...config,
    project: {
      ...config.project,
      url: isDevelopment ? "http://localhost:3000" : config.project.url,
    },
    seo: {
      ...config.seo,
      verification: isProduction
        ? config.seo.verification
        : {
            google: "",
            yandex: "",
            yahoo: "",
          },
    },
  };
}
