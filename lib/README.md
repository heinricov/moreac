# Project Configuration

File `project-config.json` berisi semua konfigurasi project Moreac yang dapat dimodifikasi dengan mudah.

## Struktur Konfigurasi

### 1. **Project Info**

- Informasi dasar project (nama, versi, deskripsi, URL)
- Pengaturan bahasa dan lokalisasi
- Logo dan favicon

### 2. **Company Info**

- Informasi perusahaan
- Kontak dan alamat
- Social media links

### 3. **SEO Configuration**

- Metadata default
- Keywords
- Verification codes untuk search engines

### 4. **Pages Configuration**

- Metadata untuk setiap halaman
- Keywords spesifik per halaman
- Open Graph images

### 5. **Content Configuration**

- Teks untuk hero section
- Features description
- Call-to-action content

### 6. **Product Configuration**

- Informasi produk template
- Harga dan rating
- Features dan images

### 7. **Tech Stack**

- Daftar teknologi yang digunakan
- Tools yang diperlukan

### 8. **Download Steps**

- Langkah-langkah download dan instalasi
- Code snippets untuk setiap step

## Cara Menggunakan

### Import Configuration

```typescript
import { config, getProjectInfo, getPageConfig } from "@/lib/config";
```

### Menggunakan di Component

```typescript
// Mengambil info project
const projectInfo = getProjectInfo();
console.log(projectInfo.name); // "Moreac"

// Mengambil konfigurasi halaman
const homeConfig = getPageConfig("home");
console.log(homeConfig.title); // "Template Website Profesional untuk Usaha Anda"

// Menggunakan di metadata
export const metadata = generatePageMetadata("home");
```

### Menggunakan di Structured Data

```typescript
import { generateStructuredData } from "@/lib/config";

const organizationSchema = generateStructuredData("organization");
const productSchema = generateStructuredData("product");
```

## Modifikasi Konfigurasi

### 1. **Ubah Informasi Project**

Edit bagian `project` di `project-config.json`:

```json
{
  "project": {
    "name": "Moreac",
    "description": "Template website profesional...",
    "url": "https://moreac.com"
  }
}
```

### 2. **Ubah Konten Halaman**

Edit bagian `pages` untuk mengubah metadata halaman:

```json
{
  "pages": {
    "home": {
      "title": "Judul Baru",
      "description": "Deskripsi baru",
      "keywords": ["keyword1", "keyword2"]
    }
  }
}
```

### 3. **Ubah Informasi Produk**

Edit bagian `product` untuk mengubah detail produk:

```json
{
  "product": {
    "name": "Nama Produk Baru",
    "price": "399000",
    "description": "Deskripsi produk baru"
  }
}
```

### 4. **Ubah Langkah Download**

Edit bagian `download.steps` untuk mengubah panduan:

```json
{
  "download": {
    "steps": [
      {
        "id": 1,
        "title": "Langkah Baru",
        "description": "Deskripsi langkah baru",
        "code": "npm install package-baru"
      }
    ]
  }
}
```

## Keuntungan Menggunakan Konfigurasi Terpusat

1. **Mudah Dimodifikasi**: Semua informasi di satu tempat
2. **Type Safety**: TypeScript support dengan interface yang jelas
3. **Konsistensi**: Memastikan informasi konsisten di seluruh aplikasi
4. **Maintainability**: Mudah di-maintain dan di-update
5. **Reusability**: Dapat digunakan di berbagai komponen
6. **SEO Friendly**: Metadata otomatis ter-generate dari konfigurasi

## Best Practices

1. **Backup**: Selalu backup file konfigurasi sebelum mengubah
2. **Version Control**: Commit perubahan konfigurasi ke git
3. **Testing**: Test aplikasi setelah mengubah konfigurasi
4. **Documentation**: Update dokumentasi jika ada perubahan struktur
5. **Validation**: Validasi JSON syntax sebelum deploy

## File yang Terpengaruh

Setelah mengubah konfigurasi, file-file berikut akan otomatis menggunakan konfigurasi baru:

- `app/layout.tsx` - Metadata global
- `app/page.tsx` - Metadata homepage
- `app/products/page.tsx` - Metadata products
- `app/about/page.tsx` - Metadata about
- `app/contact/page.tsx` - Metadata contact
- `app/pricing/page.tsx` - Metadata pricing
- `components/seo/structured-data.tsx` - Structured data
- `app/sitemap.ts` - Sitemap configuration
- `app/manifest.ts` - PWA manifest

## Troubleshooting

### Error: Cannot find module

Pastikan import path benar:

```typescript
import { config } from "@/lib/config";
```

### Type Error

Pastikan menggunakan type yang benar:

```typescript
import { ProjectConfig } from "@/lib/config";
```

### JSON Syntax Error

Validasi JSON syntax di `project-config.json` menggunakan JSON validator online.
