# Prioritized SEO Action Plan: Sanjeevani Physiotherapy Centre Hisar

This action plan provides a step-by-step roadmap implemented to make Sanjeevani Physiotherapy Centre 100% SEO-ready, adhering to Google's Search Essentials, Schema.org standards, and Generative Engine Optimization (GEO).

---

## Priority 1: Immediate Blockers (Critical) — COMPLETED

### 1.1 Ingest Static Multi-Entity Schema into `index.html`
- **Target**: `index.html`
- **Action**: Add static JSON-LD in `<head>` defining:
  - `@type: ["PhysiotherapyClinic", "MedicalBusiness", "LocalBusiness"]`
  - Full NAP, GeoCoordinates (`29.1395, 75.6421`), Opening Hours, Map link
  - Physician profile: Dr. Sohan Lal (`HSCP/PT/2025/3714`)
  - AggregateRating: 4.9 from 520 reviews
  - Medical specialties and services catalog
- **Impact**: Enables immediate indexing of structured rich results even if search bots do not execute client-side JavaScript.

### 1.2 Inject Canonical URL Tag in Static HTML
- **Target**: `index.html`
- **Action**: Add `<link rel="canonical" href="https://sanjeevaniphysiohisar.com/" />` to eliminate duplicate indexing risks across parameter variations.

### 1.3 Fix Relative Image URLs in Social Meta Tags
- **Target**: `index.html` and `src/components/SEO.jsx`
- **Action**: Change relative `/images/hero_physio.png` to absolute `https://sanjeevaniphysiohisar.com/images/hero_physio.png`. Add dimensions (`1200x630`) and alt text for WhatsApp, Facebook, Twitter, and LinkedIn rich preview cards.

---

## Priority 2: Quick Wins (High Impact, Fast Execution) — COMPLETED

### 2.1 Pre-Render Semantic HTML Fallback Inside `#root`
- **Target**: `index.html` inside `<div id="root">`
- **Action**: Include pre-rendered semantic HTML (Header, H1, About, NAP, Treatments list, Emergency Contact) that provides search bots and AI crawlers with instant crawlable text before React mounts and hydrates.
- **Impact**: Elevates crawlable word count from 4 words to 200+ words of high-relevance medical text without delaying browser rendering.

### 2.2 Full AI Crawler Coverage in `robots.txt`
- **Target**: `public/robots.txt`
- **Action**: Explicitly allow AI crawlers (`GPTBot`, `ChatGPT-User`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended`, `Bytespider`, `CCBot`, `anthropic-ai`, `FacebookBot`, `Amazonbot`) alongside standard crawlers (`Googlebot`, `Bingbot`).
- **Impact**: Maximizes visibility in AI Overviews, ChatGPT Search, and Perplexity answers.

### 2.3 LLMS.txt Specification Compliance
- **Target**: `public/llms.txt` and `public/llms-full.txt`
- **Action**: Format all internal links using standard `- [Title](URL): Description` markdown syntax. Add high-density clinical summaries and FAQ answer blocks.

### 2.4 Geographic Meta Tags
- **Target**: `index.html`
- **Action**: Add `geo.region`, `geo.placename`, `geo.position`, and `ICBM` meta tags targeting Hisar, Haryana.

---

## Priority 3: Strategic On-Page & Schema Expansion — COMPLETED

### 3.1 Dynamic BreadcrumbList & Page Schema in `SEO.jsx`
- **Target**: `src/components/SEO.jsx`
- **Action**: Dynamically generate Schema.org BreadcrumbList for all secondary routes (`/treatments`, `/about`, `/contact`, `/reviews`, `/blog`, `/gallery`).
- **Impact**: Qualifies internal pages for breadcrumb rich results in Google SERPs.

### 3.2 Sitemap Synchronization
- **Target**: `public/sitemap.xml`
- **Action**: Verify all routes and image schemas, update `lastmod` timestamps, and ensure canonical consistency.

---

## Priority 4: Ongoing Maintenance & Off-Page Best Practices (Next Steps)

1. **Google Business Profile (GBP) Synchronization**:
   - Keep GBP hours, phone numbers, and categories ("Physiotherapy Clinic", "Rehabilitation Center", "Sports Medicine Clinic") aligned with on-site schema.
2. **Patient Review Ingestion**:
   - Regularly update verified patient testimonials and aggregate rating count.
3. **Clinical Blog Expansion**:
   - Publish monthly case studies targeting specific conditions (e.g., Frozen Shoulder, Spondylolisthesis, Tennis Elbow) formatted with 130-160 word answer blocks for AI search engines.
