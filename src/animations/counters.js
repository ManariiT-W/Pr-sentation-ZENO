// Compteurs : arrivent exactement à la valeur validée (jamais arrondie).
const fmt = (v, d) => v.toLocaleString('fr-FR', { minimumFractionDigits: d, maximumFractionDigits: d }).replace(/\u202f/g, '\u00a0');
export function runCounters(slide, perf) {
  slide.querySelectorAll('[data-count]').forEach((el) => {
    const end = +el.dataset.count, d = +(el.dataset.dec || 0), delay = (perf ? 0 : 900), dur = perf ? 1 : 1600;
    el.textContent = fmt(perf ? end : 0, d); if (perf) return;
    const t0 = performance.now() + delay;
    const step = (n) => { const p = Math.min(Math.max((n - t0) / dur, 0), 1), e = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(p >= 1 ? end : end * e, d); if (p < 1 && slide.classList.contains('on')) requestAnimationFrame(step); else if (p < 1) el.textContent = fmt(end, d); };
    requestAnimationFrame(step);
  });
}
