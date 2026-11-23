const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * Config szöveg → biztonságos HTML.
 *  - "\n"      → sortörés (minden sor külön maszkolt span, a mask-reveal animációhoz)
 *  - *szöveg*  → akcentus kiemelés
 */
export function richLines(text: string): string {
  return text
    .split('\n')
    .map((line, i) => {
      const html = escapeHtml(line).replace(/\*(.+?)\*/g, '<em class="accent">$1</em>');
      return `<span class="line" style="--i:${i}"><span class="line__inner">${html}</span></span>`;
    })
    // szóköz a sorok között: a képernyőolvasók és a keresők ne olvassák össze a szavakat
    .join(' ');
}

/** Ugyanaz sortörések nélkül, egyszerű inline kiemeléssel. */
export function richInline(text: string): string {
  return escapeHtml(text)
    .replace(/\*(.+?)\*/g, '<em class="accent">$1</em>')
    .replace(/\n/g, '<br />');
}

/** Plain text verzió (SEO / aria-label). */
export function plain(text: string): string {
  return text.replace(/\*/g, '').replace(/\n/g, ' ');
}

export const pad2 = (n: number) => String(n).padStart(2, '0');
