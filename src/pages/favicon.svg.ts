import type { APIRoute } from 'astro';
import { site } from '../config/site';

/** Favicon a márka monogramjából és akcentus színéből — white-label. */
export const GET: APIRoute = () => {
  const initials = site.brand.name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  const { black, offWhite, accent } = site.theme;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="${black}"/>
  <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="Impact, 'Arial Narrow', sans-serif" font-size="34" fill="${offWhite}" letter-spacing="-1">${initials}</text>
  <rect x="48" y="48" width="8" height="8" fill="${accent}"/>
</svg>`;

  return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml' } });
};
