import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

function assert(condition: boolean, message: string): void {
  if (!condition) {
    throw new Error(message);
  }
}

function read(relativePath: string): string {
  return fs.readFileSync(path.join(rootDir, relativePath), 'utf8');
}

function textFiles(directory: string): string[] {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      return textFiles(fullPath);
    }
    return /\.(html|xml|js|css|txt)$/.test(entry.name) ? [fullPath] : [];
  });
}

assert(fs.existsSync(distDir), 'dist directory is missing; run npm run build first');

const homepage = read('dist/index.html');
const piliyandalaPage = read('dist/service-areas/piliyandala/index.html');
const sitemap = read('dist/sitemap.xml');
const analyticsSource = read('src/utils/analytics.ts');
const generatedText = textFiles(distDir)
  .map((file) => fs.readFileSync(file, 'utf8'))
  .join('\n');

assert(
  homepage.includes('<title>Cleaning Services in Piliyandala &amp; Colombo | NKP Cleaners</title>'),
  'homepage local SEO title is missing',
);
assert(
  piliyandalaPage.includes('<title>Cleaning Services in Piliyandala | NKP Cleaners</title>'),
  'Piliyandala SEO title is missing',
);
assert(piliyandalaPage.includes('"@type":"FAQPage"'), 'Piliyandala FAQ schema is missing');
assert(sitemap.includes('/service-areas/bandaragama'), 'Bandaragama sitemap URL is missing');
assert(!sitemap.includes('/service-areas/bandagama'), 'legacy Bandagama URL remains in the sitemap');
assert(!/vehicle\s+(cleaning|detailing)/i.test(generatedText), 'excluded vehicle cleaning content found');

for (const eventName of ['click_whatsapp', 'click_phone', 'lead_form_submit', 'quote_request']) {
  assert(analyticsSource.includes(`'${eventName}'`), `analytics event ${eventName} is missing`);
}

console.log('SEO validation passed');
