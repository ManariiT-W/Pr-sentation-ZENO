import { SLIDES } from './slides/slides.js';
import { transition, PLAN, DURATION } from './transitions/engine.js';
import { runCounters } from './animations/counters.js';
const stage = document.getElementById('stage'), iris = document.getElementById('iris');
const store = { get: (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} } };
let cur = 0, busy = false, perf = store.get('zeno-perf') === '1';
const secs = SLIDES.map((s) => { const e = document.createElement('section'); e.className = 's'; e.id = 's' + s.id; if (s.eye) e.dataset.eye = s.eye;
  e.innerHTML = `<div class="in">${s.html()}</div>`; stage.insertBefore(e, iris); return e; });
const fit = () => { const k = Math.min(innerWidth / 1920, innerHeight / 1080); stage.style.transform = `translate(-50%,-50%) scale(${k})`; };
addEventListener('resize', fit); fit();
const ui = () => { document.getElementById('cnt').textContent = `${cur + 1} / ${SLIDES.length}`; document.getElementById('mode').textContent = perf ? 'Mode performance' : 'Mode cinématographique'; document.body.classList.toggle('perf', perf); };
const show = (i) => { secs[i].classList.add('on'); runCounters(secs[i], perf); };
async function go(n) {
  if (busy || n < 0 || n >= SLIDES.length || n === cur) return;
  busy = true; const dir = n > cur, type = !dir || Math.abs(n - cur) > 1 ? (dir ? 'fast' : 'back') : PLAN[cur];
  const from = secs[cur]; cur = n; ui(); secs[n].classList.remove('on');
  try { const p = transition(from, secs[n], type, perf, iris); setTimeout(() => runCounters(secs[n], perf), perf ? 0 : (DURATION[type] || 1500) * .5); await p; }
  catch (e) { console.error(e); secs.forEach((s, i) => s.classList.toggle('on', i === cur)); }
  busy = false;
}
const fs = () => (document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen().catch(() => {}));
addEventListener('keydown', (e) => {
  if (['ArrowRight', 'PageDown', ' ', 'Enter'].includes(e.key)) { e.preventDefault(); go(cur + 1); }
  else if (['ArrowLeft', 'PageUp', 'Backspace'].includes(e.key)) { e.preventDefault(); go(cur - 1); }
  else if (e.key === 'Home') go(0); else if (e.key === 'End') go(SLIDES.length - 1);
  else if (e.key.toLowerCase() === 'f') fs();
  else if (e.key.toLowerCase() === 'p') { perf = !perf; store.set('zeno-perf', perf ? '1' : '0'); ui(); }
});
document.getElementById('prev').onclick = () => go(cur - 1); document.getElementById('next').onclick = () => go(cur + 1); document.getElementById('fs').onclick = fs;
const hash = parseInt(location.hash.slice(1)) - 1; if (hash > 0 && hash < SLIDES.length) cur = hash;
ui(); show(cur); window.__zeno = { go, get cur() { return cur; } };
