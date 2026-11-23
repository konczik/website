// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// On Vercel the production domain is exposed at build time.
// For a custom domain, set SITE_URL in the Vercel project settings.
const site =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:4321');

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
