# Socialhub.AI Website

Static marketing website for Socialhub.AI, built with Astro, Tailwind CSS, MDX content, and a Git-based CMS model.

## Current Status

This repository contains the first website scaffold:

- Homepage with Socialhub.AI positioning and brand colors.
- Platform, Solutions, Customers, Blog, About, Contact, and `/zh/` placeholder routes.
- Blog content model and sample posts.
- Customer story content model and sample customer entries.
- Keystatic CMS schema for Blog, Customer Stories, and Industry Pages.
- RSS, Sitemap, Open Graph image, and Pagefind static search setup.

The source was verified in a clean `/tmp` copy and built successfully:

```text
22 page(s) built
sitemap-index.xml created
Pagefind indexed 22 pages
```

## Tech Stack

- Astro 5
- Tailwind CSS 4
- MDX
- Keystatic
- Astro RSS
- Astro Sitemap
- Pagefind
- Lucide icons

## Project Structure

```text
src/
  components/          Reusable UI sections and cards
  content/
    blog/en/           Blog posts
    customers/en/      Customer stories
    industries/en/     Industry page content
  data/
    site.ts            Navigation, brand settings, CTA, product modules
    routing.ts         Content slug helpers
  layouts/
    BaseLayout.astro   Shared HTML, SEO, header, footer
  pages/
    index.astro
    blog/
    customers/
    platform/
    solutions/
    contact.astro
    zh/
  styles/
    global.css         Brand tokens and global styles

keystatic.config.ts    CMS schema
astro.config.mjs       Astro integrations and static build config
```

## Commands

Install dependencies:

```bash
npm ci
```

Run the website locally:

```bash
npm run dev
```

Run local CMS editing:

```bash
npm run dev:cms
```

Build static production files:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## CMS Model

Keystatic is configured in `keystatic.config.ts`.

The production build does not enable Keystatic server routes by default because the first deployment target is static hosting on Alibaba Cloud with Nginx. CMS editing is enabled only during local development:

```bash
npm run dev:cms
```

Content is stored in Git as MDX files:

```text
src/content/blog/en/*.mdx
src/content/customers/en/*.mdx
src/content/industries/en/*.mdx
```

This means publishing content is a Git workflow:

```text
edit content
commit changes
deploy static build
```

## Blog Maintenance

Add a new English blog post under:

```text
src/content/blog/en/
```

Required fields:

```yaml
title:
description:
publishDate:
locale: "en"
author:
category:
tags:
featured:
relatedProducts:
ctaVariant:
seoTitle:
seoDescription:
```

Blog routes are generated as:

```text
/blog/{filename-without-mdx}/
```

## Customer Story Maintenance

Add a new customer story under:

```text
src/content/customers/en/
```

Important fields:

```yaml
customerName:
title:
summary:
industry:
region:
logoText:
featured:
productsUsed:
results:
challenge:
solution:
testimonial:
sections:
seoTitle:
seoDescription:
```

The frontend hides optional modules automatically:

- No `results`: metric cards do not render.
- No `testimonial.quote`: testimonial block does not render.
- No `productsUsed`: product tags do not render.
- No `sections`: story sections do not render.

Customer routes are generated as:

```text
/customers/{filename-without-mdx}/
```

## Contact Form

The current form is static and posts via `mailto:` to:

```text
business@socialhub.ai
```

Fields:

- Company Name
- Contact Name
- Email Address
- Phone
- Message

For production, replace this with a real endpoint later:

- Alibaba Cloud Function Compute
- CRM form endpoint
- HubSpot form
- custom API that sends email and stores inbound leads

## Alibaba Cloud Deployment

Recommended first deployment:

```text
npm ci
npm run build
upload dist/ to ECS
serve dist/ with Nginx
```

The website is static after build. It does not need a Node server in production.

Minimum Nginx behavior:

- Serve `dist/` as document root.
- Fallback unknown routes to `404.html` if added later.
- Enable gzip or brotli.
- Cache immutable assets.
- Keep `/rss.xml` and sitemap XML accessible.

## Notes

- Brand colors are defined in `src/styles/global.css`.
- Site navigation and CTA settings are in `src/data/site.ts`.
- The Chinese route `/zh/` is reserved but not localized yet.
- Sample customer stories are placeholders and should be replaced with approved copy before public launch.
