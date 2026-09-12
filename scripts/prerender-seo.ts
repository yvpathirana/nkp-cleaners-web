import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  routeList,
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  OG_IMAGE_WIDTH,
  OG_IMAGE_HEIGHT,
} from '../src/seo/seoConfig';
import { getAllAreaSeoConfigs } from '../src/seo/areaSeo';
import type { RouteSeoData } from '../src/seo/seoConfig';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const templatePath = path.join(distDir, 'index.html');

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderHeadTags(route: RouteSeoData): string {
  const canonicalPath = route.path === '/' ? '' : route.path;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const ogImage = route.ogImage || DEFAULT_OG_IMAGE;
  const fullTitle = `${route.title} | ${SITE_NAME}`;

  const tags: string[] = [
    `<meta name="description" content="${escapeHtml(route.description)}" />`,
    route.keywords
      ? `<meta name="keywords" content="${escapeHtml(route.keywords)}" />`
      : '',
    route.noIndex
      ? `<meta name="robots" content="noindex, nofollow" />`
      : `<meta name="robots" content="index, follow" />`,
    `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />`,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
    `<meta property="og:title" content="${escapeHtml(fullTitle)}" />`,
    `<meta property="og:description" content="${escapeHtml(route.description)}" />`,
    `<meta property="og:image" content="${escapeHtml(ogImage)}" />`,
    `<meta property="og:image:width" content="${OG_IMAGE_WIDTH}" />`,
    `<meta property="og:image:height" content="${OG_IMAGE_HEIGHT}" />`,
    `<meta property="og:image:alt" content="${escapeHtml(SITE_NAME)} logo" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(fullTitle)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(ogImage)}" />`,
    `<title>${escapeHtml(fullTitle)}</title>`,
  ];

  const schemaTags =
    route.schemas?.map(
      (schema, index) =>
        `<script type="application/ld+json" data-seo-schema="schema-${index}">${JSON.stringify(schema)}</script>`,
    ) ?? [];

  return [...tags.filter(Boolean), ...schemaTags].join('\n    ');
}

function generateHtml(template: string, route: RouteSeoData): string {
  let html = template;

  // Remove any pre-existing SEO tags that we are about to replace
  html = html.replace(/<title>.*?<\/title>/, '');
  html = html.replace(/<meta\s+name=["']description["'][^>]*>/i, '');
  html = html.replace(/<meta\s+name=["']keywords["'][^>]*>/i, '');
  html = html.replace(/<meta\s+name=["']robots["'][^>]*>/i, '');
  html = html.replace(/<link\s+rel=["']canonical["'][^>]*>/i, '');
  html = html.replace(/<meta\s+property=["']og:[^"']+["'][^>]*>/gi, '');
  html = html.replace(/<meta\s+name=["']twitter:[^"']+["'][^>]*>/gi, '');
  html = html.replace(/<script[^>]*data-seo-schema[^>]*>[^]*?<\/script>/gi, '');

  const headTags = renderHeadTags(route);
  html = html.replace('<head>', `<head>\n    ${headTags}`);

  return html;
}

function sitemapEntry(route: RouteSeoData): string {
  const url = `${SITE_URL}${route.path === '/' ? '' : route.path}`;
  const priority =
    route.path === '/'
      ? '1.0'
      : route.path.startsWith('/services/') || route.path.startsWith('/service-areas/')
        ? '0.8'
        : '0.9';
  const today = new Date().toISOString().split('T')[0];
  return `  <url>\n    <loc>${url}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

function generateSitemap(routes: RouteSeoData[]): string {
  const entries = routes.map(sitemapEntry);

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`;
}

function writeRoute(template: string, route: RouteSeoData): void {
  const html = generateHtml(template, route);
  const outDir =
    route.path === '/' ? distDir : path.join(distDir, route.path.replace(/^\//, ''));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  console.log(`Prerendered: ${route.path}`);
}

function main() {
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Built index.html not found at ${templatePath}. Run vite build first.`);
  }

  const template = fs.readFileSync(templatePath, 'utf-8');
  const areaRoutes = getAllAreaSeoConfigs();
  const allRoutes: RouteSeoData[] = [...routeList, ...areaRoutes];

  for (const route of allRoutes) {
    writeRoute(template, route);
  }

  const sitemap = generateSitemap(allRoutes);
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
  console.log('Generated: /sitemap.xml');
}

main();
