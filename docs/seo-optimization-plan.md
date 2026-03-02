# SEO, AEO, and GEO Optimization Plan

## Current State & Gaps
The website correctly implements traditional SEO (`generateMetadata`) and Answer Engine Optimization (AEO/GEO) via `application/ld+json` for the following core areas:
- Root Layout (Organization, WebSite)
- Homepage (Breadcrumbs, FAQ, ServiceList)
- Services List Page (Breadcrumbs, ServiceList)
- Case Studies List Page (Breadcrumbs, CollectionPage)

However, the following gaps persist across the codebase:
1. Inner pages (`/about`, `/contact`, `/solutions`, `/portfolio`, `/privacy-policy`) either have hardcoded minimal metadata (lacking Open Graph) or missing JSON-LD structured data (no Breadcrumbs or specific Page schemas).
2. Dynamic routes (`/case-studies/[slug]`, `/portfolio/[slug]`) lack `Article` or `CreativeWork` schemas.

## Action Plan
1. **Core Utilities**: Expand `src/lib/structured-data.ts` to include generators for `AboutPage`, `ContactPage`, and `Article` schemas.
2. **Inner Pages**: Standardize metadata using `generateMetadata` and inject `<StructuredData>` with accurate Breadcrumbs + Page schemas for `/about`, `/contact`, `/solutions`, `/portfolio`, and `/privacy-policy`.
3. **Dynamic Routes**: Inject `<StructuredData>` with Breadcrumbs + `Article` schemas in the dynamic `[slug]/page.tsx` routes.

## Verification
- Run `npm run build` to ensure type safety.
- Verify JSON-LD blocks render correctly in DOM.
- Use Google's Rich Results tests once deployed.
