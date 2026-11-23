# Prémium személyi edző weboldal — white-label sablon

Editorial stílusú, értékesítésre optimalizált egyoldalas weboldal személyi edzőknek.
[Astro](https://astro.build) alapú, statikus build, Vercelre optimalizálva.

## Fejlesztés

```sh
npm install
npm run dev       # http://localhost:4321
npm run check     # typecheck / lint (astro check)
npm run build     # production build → dist/
npm run preview   # a build helyi előnézete
```

Node.js ≥ 22.23 szükséges.

## Új edzőre szabás (white-label)

Szinte minden egy fájlban van: **`src/config/site.ts`**

| Mit | Hol (`site.ts`) |
|---|---|
| Név, logó szöveg / SVG logó, város | `brand` |
| Színek (egy akcentus szín!) | `theme` |
| SEO title, description | `seo` |
| E-mail, telefon, foglalási link (Calendly stb.) | `contact` |
| Social linkek | `social` |
| Hero szöveg, CTA-k, kép | `hero` |
| Szolgáltatások, árak | `services.items` |
| Statisztikák (count-up számok) | `results` |
| Ügyféltörténetek | `transformations.items` |
| Bemutatkozás, tények | `about` |
| Folyamat lépései | `process.steps` |
| Vélemények | `testimonials.items` |
| Záró CTA | `finalCta` |

**Képek:** cseréld a fájlokat az `src/assets/images/` mappában (azonos néven), vagy importálj újakat a `site.ts` tetején. Az Astro automatikusan AVIF/WebP-be konvertálja és átméretezi őket.

**Headline formázás:** `\n` = sortörés, `*szöveg*` = akcentus kiemelés.

**Foglalás:** ha a `contact.bookingUrl` üres, a fő CTA e-mailt nyit.

**Favicon:** automatikusan generálódik a névből (monogram) és az akcentus színből.

**Domain:** egyedi domainhez állítsd be a `SITE_URL` környezeti változót a Vercelen (canonical, Open Graph és sitemap URL-ekhez).

## Struktúra

```
src/
  config/site.ts        ← minden tartalom és márkabeállítás
  assets/images/        ← fotók (build közben optimalizálva)
  components/           ← Navbar, Hero, StatementSection, ProblemSolution, Services,
                          Results, Transformation, About, Process, Testimonials,
                          FinalCTA, Footer, SectionHeading, ui/
  layouts/BaseLayout.astro  ← SEO, Open Graph, fontok, téma színek
  scripts/motion.ts     ← scroll-alapú animációk (IntersectionObserver)
  styles/global.css     ← design tokenek, tipográfia, animációs állapotok
```

## Animációk

Elemenként egyszer, a viewportba lépéskor indulnak (`data-reveal="up|mask|image|fade|line"`,
staggerelés: `data-stagger="100"`). `prefers-reduced-motion` esetén minden azonnal, animáció nélkül látszik;
JavaScript nélkül is minden tartalom látható.

## Képek forrása

A demó fotók az [Unsplash](https://unsplash.com/license)-ről származnak (szabadon felhasználható licenc).
Éles használat előtt cseréld az edző saját fotóira.
