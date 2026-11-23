/**
 * Scroll-alapú megjelenési animációk.
 *
 *  [data-reveal="up|mask|image|fade|line"]  → .is-in, amikor belép a viewportba
 *  [data-stagger="100"]                     → a gyerek [data-reveal] elemek
 *                                             0, 100, 200 ... ms késleltetést kapnak
 *  [data-delay="200"]                        → egyedi alap-késleltetés
 *  [data-count]                              → count-up animáció a láthatóvá váláskor
 *
 * Minden elem EGYSZER animálódik (utána unobserve).
 * prefers-reduced-motion esetén minden azonnal, animáció nélkül látszik.
 */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Stagger késleltetések kiosztása ─────────────────────────── */
function applyStagger() {
  document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((group) => {
    const step = Number(group.dataset.stagger) || 100;
    const base = Number(group.dataset.delay) || 0;
    const items = group.querySelectorAll<HTMLElement>('[data-reveal]');
    items.forEach((el, i) => {
      if (!el.dataset.delay) el.style.setProperty('--delay', `${base + i * step}ms`);
    });
  });
  document.querySelectorAll<HTMLElement>('[data-reveal][data-delay]').forEach((el) => {
    el.style.setProperty('--delay', `${Number(el.dataset.delay) || 0}ms`);
  });
}

/* ── Count-up ────────────────────────────────────────────────── */
const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

const locale = document.querySelector<HTMLElement>('[data-locale]')?.dataset.locale || document.documentElement.lang || undefined;
const formatters = new Map<number, Intl.NumberFormat>();

function formatValue(value: number, decimals: number) {
  let f = formatters.get(decimals);
  if (!f) {
    f = new Intl.NumberFormat(locale, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    formatters.set(decimals, f);
  }
  return f.format(value);
}

function prepareCounter(el: HTMLElement) {
  const decimals = Number(el.dataset.decimals) || 0;
  el.textContent = formatValue(0, decimals);
}

function runCounter(el: HTMLElement) {
  if (el.dataset.counted) return;
  el.dataset.counted = 'true';
  const target = Number(el.dataset.count);
  const decimals = Number(el.dataset.decimals) || 0;
  const delay = Number(el.dataset.countDelay) || 0;
  const duration = 2200;
  const begin = () => {
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      el.textContent = formatValue(target * easeOutExpo(t), decimals);
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = formatValue(target, decimals);
    };
    requestAnimationFrame(tick);
  };
  window.setTimeout(begin, delay);
}

/* ── Init ────────────────────────────────────────────────────── */
function init() {
  const revealEls = document.querySelectorAll<HTMLElement>('[data-reveal]');
  const counters = document.querySelectorAll<HTMLElement>('[data-count]');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-in'));
    return; // a számok már a végértékkel szerepelnek a HTML-ben
  }

  applyStagger();
  counters.forEach(prepareCounter);

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        if (el.hasAttribute('data-count')) runCounter(el);
        else el.classList.add('is-in');
        observer.unobserve(el); // csak egyszer fut le
      }
    },
    {
      // akkor indul, amikor az elem ~15%-a látszik, a viewport alsó 8%-a fölött
      threshold: 0.15,
      rootMargin: '0px 0px -8% 0px',
    },
  );

  revealEls.forEach((el) => observer.observe(el));
  counters.forEach((el) => observer.observe(el));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
  init();
}
