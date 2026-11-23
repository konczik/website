/**
 * ─────────────────────────────────────────────────────────────
 *  KÖZPONTI TARTALOM- ÉS MÁRKAKONFIGURÁCIÓ (white-label)
 * ─────────────────────────────────────────────────────────────
 *  Új edzőhöz csak ezt a fájlt (és az src/assets/images mappát)
 *  kell módosítani. Minden szöveg, kép, szín, statisztika,
 *  szolgáltatás, ár, vélemény és link innen jön.
 *
 *  Sortörés a nagy headline-okban: "\n".
 *  Akcentus színű kiemelés: *csillagok* között. Takarékosan —
 *  az akcentus a CTA-ké és a fontos számoké.
 */
import type { ImageMetadata } from 'astro';

import heroImg from '../assets/images/hero.jpg';
import problemImg from '../assets/images/problem.jpg';
import servicePersonal from '../assets/images/service-personal.jpg';
import serviceOnline from '../assets/images/service-online.jpg';
import servicePerformance from '../assets/images/service-performance.jpg';
import aboutPortrait from '../assets/images/about-portrait.jpg';
import client1 from '../assets/images/client-1.jpg';
import client2 from '../assets/images/client-2.jpg';
import finalCtaImg from '../assets/images/final-cta.jpg';

export interface Cta {
  label: string;
  href: string;
}

export interface Stat {
  /** Számérték, ami count-up animációt kap. */
  value: number;
  /** Tizedesjegyek száma (pl. 4,9 → 1). */
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  /** Kinek / hol — rövid formátum leírás a cím fölött. */
  format: string;
  lead: string;
  text: string;
  bullets: string[];
  price?: string;
  image: ImageMetadata;
  imageAlt: string;
  cta: Cta;
}

export interface Transformation {
  name: string;
  age: number;
  goal: string;
  result: { value: string; unit: string; detail: string };
  quote: string;
  image: ImageMetadata;
  imageAlt: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  detail: string;
}

export const site = {
  /* ── Márka ─────────────────────────────────────────────── */
  brand: {
    /** Az edző neve – navbarban, footerben, SEO-ban. */
    name: 'Nagy Bence',
    /** Logó szöveg. Ha van SVG logód, tedd a public/ mappába és add meg a logoSrc-t. */
    logoText: 'NAGY BENCE',
    logoSrc: '' as string,
    role: 'Személyi edző',
    city: 'Budapest',
    locale: 'hu_HU',
    lang: 'hu',
    /** Számformázás (tizedesvessző stb.). */
    numberLocale: 'hu-HU',
  },

  /* ── Színek ─────────────────────────────────────────────── */
  theme: {
    black: '#0b0b0b',
    charcoal: '#161616',
    graphite: '#242424',
    offWhite: '#f2efe9',
    muted: '#9a968f',
    /** Az egyetlen akcentus szín. Példák: lime '#c8f03c', narancs '#ff5b1f'. */
    accent: '#ff5b1f',
    /** Szöveg színe akcentus háttéren. */
    onAccent: '#0b0b0b',
  },

  /* ── SEO ─────────────────────────────────────────────────── */
  seo: {
    title: 'Nagy Bence — Személyi edző Budapesten | Personal Training & Online Coaching',
    description:
      'Személyre szabott edzés, követhető rendszer és valódi eredmények. Személyi edzés, online coaching és teljesítményfejlesztés Budapesten. Kérj ingyenes konzultációt.',
    ogImageAlt: 'Nagy Bence személyi edző: Építsük fel a legerősebb éned.',
  },

  /* ── Kapcsolat & social ──────────────────────────────────── */
  contact: {
    email: 'hello@nagybence.hu',
    phone: '+36 30 123 4567',
    /** Időpontfoglaló link (Calendly, Cal.com stb.). Ha üres, e-mail nyílik. */
    bookingUrl: '',
    address: 'Budapest, XIII. kerület',
  },
  social: [
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'TikTok', href: 'https://tiktok.com/' },
    { label: 'YouTube', href: 'https://youtube.com/' },
  ],

  /* ── Navigáció ───────────────────────────────────────────── */
  nav: {
    links: [
      { label: 'Szolgáltatások', href: '#szolgaltatasok' },
      { label: 'Rólam', href: '#rolam' },
      { label: 'Eredmények', href: '#eredmenyek' },
      { label: 'Vélemények', href: '#velemenyek' },
    ],
    cta: { label: 'Konzultáció', href: '#kapcsolat' },
  },

  /* ── Hero ────────────────────────────────────────────────── */
  hero: {
    eyebrow: 'Personal Training · Performance · Lifestyle',
    headline: 'Építsük fel\na *legerősebb*\néned.',
    sub: 'Személyre szabott edzés, követhető rendszer és valódi eredmények — a céljaidhoz igazítva.',
    /** Ki vagyok, egy mondatban — az első 5 másodperc bizalmi eleme. */
    intro: 'Nagy Bence vagyok, budapesti személyi edző. 8 év alatt több mint 150 ügyfelemnek segítettem erősebbé válni.',
    primaryCta: { label: 'Kezdjük el', href: '#kapcsolat' },
    secondaryCta: { label: 'Ismerj meg', href: '#rolam' },
    image: heroImg,
    imageAlt: 'Sportoló súlyzós felhúzásra készül egy sötét edzőteremben, drámai fényben',
  },

  /* ── Statement ───────────────────────────────────────────── */
  statement: {
    /** Az első rész kisebb, a második (punchline) óriási. */
    setup: 'A fejlődés nem\nmotiváció kérdése.',
    punchline: 'Hanem\nrendszeré.',
  },

  /* ── Probléma → megoldás ─────────────────────────────────── */
  problem: {
    intro: 'Ismerős valamelyik?',
    items: [
      'Nem tudod, mit eddz?',
      'Nem látod a fejlődést?',
      'Folyton újrakezded?',
      'Nincs rendszered?',
    ],
    solution: 'Én segítek rendszert építeni\na céljaid köré.',
    solutionText:
      'Világos terv, mérhető haladás és valaki, aki számon tart. Nem több akaraterő kell, hanem egy struktúra, ami akkor is működik, amikor nincs kedved.',
    cta: { label: 'Megnézem, hogyan működik', href: '#folyamat' },
    image: problemImg,
    imageAlt: 'Fekete-fehér kép egy húzódzkodó sportoló izmos hátáról',
  },

  /* ── Szolgáltatások ──────────────────────────────────────── */
  services: {
    title: 'Három út.\nEgy rendszer.',
    items: [
      {
        id: 'personal',
        title: 'Personal Training',
        format: 'Személyesen, Budapesten',
        lead: 'Személyes, célorientált edzés.',
        text: 'Minden alkalom a te céljaidra épül: technika, terhelés és tempó, melletted, valós időben korrigálva.',
        bullets: ['Heti 1–3 személyes alkalom', 'Felmérés és rendszeres mérések', 'Táplálkozási alapok'],
        price: '18 000 Ft-tól / alkalom',
        image: servicePersonal,
        imageAlt: 'Edző korrigálja ügyfele fekvőtámasz technikáját az edzőteremben',
        cta: { label: 'Konzultációt kérek', href: '#kapcsolat' },
      },
      {
        id: 'online',
        title: 'Online Coaching',
        format: 'Online, bárhonnan',
        lead: 'Strukturált online támogatás.',
        text: 'Edzésterv, heti check-in és folyamatos visszajelzés. Bárhol edzel, a rendszered veled van.',
        bullets: ['Egyéni edzésterv appban', 'Heti check-in és videóelemzés', 'Chat támogatás'],
        price: '39 000 Ft / hó',
        image: serviceOnline,
        imageAlt: 'Közeli kép kézisúlyzókat emelő kezekről sötét edzőteremben',
        cta: { label: 'Konzultációt kérek', href: '#kapcsolat' },
      },
      {
        id: 'performance',
        title: 'Performance',
        format: 'Sportolóknak és ambiciózus amatőröknek',
        lead: 'Erőnlét, teljesítmény és hosszú távú fejlődés.',
        text: 'Erő, robbanékonyság és terhelhetőség periodizált programmal, mérhető teljesítménytesztekkel.',
        bullets: ['Periodizált erőprogram', 'Teljesítménytesztek', 'Sérülésmegelőzés'],
        price: 'Egyedi ajánlat',
        image: servicePerformance,
        imageAlt: 'Közeli kép egy rúdra rakott súlytárcsáról és a rudat markoló kézről',
        cta: { label: 'Konzultációt kérek', href: '#kapcsolat' },
      },
    ] satisfies Service[],
  },

  /* ── Eredmények (statisztikák) ───────────────────────────── */
  results: {
    title: 'Számok, amik\nnem hazudnak.',
    stats: [
      { value: 150, prefix: '+', label: 'ügyfél' },
      { value: 8, suffix: '+', label: 'év tapasztalat' },
      { value: 4.9, decimals: 1, suffix: '/5', label: 'átlagos ügyfélértékelés' },
    ] satisfies Stat[],
    highlight: {
      value: 12,
      prefix: '−',
      suffix: ' kg',
      label: 'Átlagos testsúlyváltozás 16 hét alatt, fogyási célú ügyfeleknél.',
    },
    note: 'Az eredmények egyéniek. A számok a 2024 és 2026 közötti ügyfélkör átlagai.',
  },

  /* ── Transzformációk ─────────────────────────────────────── */
  transformations: {
    title: 'Valódi emberek.\nValódi változás.',
    items: [
      {
        name: 'Réka',
        age: 29,
        goal: 'Erő és testkompozíció',
        result: { value: '−9', unit: 'kg', detail: '14 hét alatt' },
        quote:
          'Életemben először nem a mérleg miatt edzek. Erősebb vagyok, mint valaha, és ez meg is látszik.',
        image: client1,
        imageAlt: 'Fekete-fehér portré Rékáról edzés közben',
      },
      {
        name: 'Dávid',
        age: 36,
        goal: 'Visszatérés térdműtét után',
        result: { value: '+40', unit: 'kg', detail: 'guggolásban, 20 hét alatt' },
        quote:
          'A műtét után féltem a súlyoktól. Bence lépésről lépésre építette vissza a bizalmamat, és az erőmet.',
        image: client2,
        imageAlt: 'Dávid kettlebellel edz egy sötét edzőteremben',
      },
    ] satisfies Transformation[],
    /** Mini CTA a fejezet végén. */
    cta: { label: 'Te leszel a következő? Kérj konzultációt', href: '#kapcsolat' },
  },

  /* ── Rólam ──────────────────────────────────────────────── */
  about: {
    title: 'Nem csak edzéstervet adok.\nRendszert adok a fejlődésedhez.',
    story: [
      'Versenysportolóként tanultam meg, hogy a tehetség csak a kezdet. Ami igazán számít, az a rendszer: mit csinálsz hétfőn, amikor nincs kedved, és mit mérsz, hogy tudd, jó irányba mész.',
      'Az elmúlt 8 évben több mint 150 ügyféllel dolgoztam: irodai munkát végző kezdőkkel, sérülésből visszatérőkkel és versenysportolókkal. A módszer mindenkinél ugyanaz: felmérés, terv, mérés, finomhangolás.',
    ],
    image: aboutPortrait,
    imageAlt: 'Nagy Bence személyi edző portréja az edzőteremben',
    facts: [
      { label: 'Tapasztalat', value: '8+ év edzői munka, előtte versenysportoló' },
      { label: 'Specializáció', value: 'Erőfejlesztés, testkompozíció, visszatérés sérülés után' },
      { label: 'Filozófia', value: 'Kevesebb motiváció, több rendszer. Mérj, ne találgass.' },
      { label: 'Végzettség', value: 'TF személyi edző, NSCA-CSCS, funkcionális tréner' },
    ],
    signature: 'Bence',
  },

  /* ── Folyamat ───────────────────────────────────────────── */
  process: {
    title: 'Három lépés.\nNulla találgatás.',
    steps: [
      { title: 'Felmérés', text: 'Megismerjük a céljaidat és jelenlegi állapotodat.' },
      { title: 'Terv', text: 'Felépítjük a személyre szabott rendszeredet.' },
      { title: 'Fejlődés', text: 'Követjük az eredményeket és folyamatosan optimalizálunk.' },
    ],
    cta: { label: 'Konzultációt kérek', href: '#kapcsolat' },
  },

  /* ── Vélemények ─────────────────────────────────────────── */
  testimonials: {
    /** Képernyőolvasóknak és SEO-nak (vizuálisan rejtett szekciócím). */
    title: 'Ügyfélvélemények',
    items: [
      {
        quote: 'Végre nem egy újabb edzéstervet kaptam.\nHanem egy rendszert, amit tényleg tudok követni.',
        author: 'Anna',
        detail: '32 éves, online coaching',
      },
      {
        quote: 'Fél év alatt többet fejlődtem, mint előtte öt év alatt egyedül.',
        author: 'Márton',
        detail: '41 éves, personal training',
      },
    ] satisfies Testimonial[],
  },

  /* ── Záró CTA ───────────────────────────────────────────── */
  finalCta: {
    title: 'Készen állsz\na következő\nszintre?',
    sub: 'Az első lépés egyszerű. Beszéljük át, honnan indulsz és hová szeretnél eljutni.',
    primaryCta: { label: 'Kezdjük el', href: '' },
    note: 'Az első konzultáció ingyenes, 20 perces, és nem kötelez semmire.',
    image: finalCtaImg,
    imageAlt: 'Fekete-fehér kép egy guggolásra készülő sportoló hátáról, rúddal a vállán',
  },

  /* ── Footer ─────────────────────────────────────────────── */
  footer: {
    tagline: 'Rendszer. Erő. Eredmény.',
    legal: [
      { label: 'Adatkezelés', href: '#' },
      { label: 'ÁSZF', href: '#' },
    ],
  },
};

/** A foglalási link: bookingUrl, ha meg van adva, különben e-mail. */
export const bookingHref =
  site.contact.bookingUrl ||
  `mailto:${site.contact.email}?subject=${encodeURIComponent('Konzultáció kérés')}`;

export type Site = typeof site;
