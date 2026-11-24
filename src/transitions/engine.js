// Moteur de transitions — inspiré de la vidéo de référence : le titre grossit jusqu'à envahir l'écran,
// passage par le noir, puis la scène suivante se révèle en flou → net avec un léger zoom arrière.
const EASE = 'cubic-bezier(.7,0,.2,1)', OUT = 'cubic-bezier(.16,.8,.2,1)';
const an = (el, kf, o = {}) => el ? el.animate(kf, { fill: 'both', easing: EASE, ...o }).finished : Promise.resolve();
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const blur = (px, perf) => (perf ? 'none' : `blur(${px}px)`);
const inn = (s) => s.querySelector('.in');

// Plan par passage i → i+1 (index 0-based du slide de départ)
export const PLAN = ['eye', 'giant', 'meet', 'out', 'rise', 'giant', 'out', 'giant', 'exit'];
export const DURATION = { eye: 2300, giant: 2200, meet: 2400, out: 1900, rise: 1900, exit: 2300, back: 1500, fast: 350 };

const reveal = (to, perf, from = {}, ms = 1300, delay = 0) =>
  an(inn(to), [{ opacity: 0, filter: blur(26, perf), transform: `scale(${from.s ?? 1.12})` }, { opacity: 1, filter: 'none', transform: 'none' }], { duration: ms, delay, easing: OUT });

export async function transition(from, to, type, perf, iris) {
  const f = inn(from), t = inn(to);
  t.style.opacity = '0'; to.classList.add('on'); to.style.zIndex = 3; from.style.zIndex = 2;
  to.style.setProperty('--base', (perf ? 0 : DURATION[type] * 0.45) + 'ms');
  if (perf || type === 'fast') {
    await Promise.all([an(f, [{ opacity: 1 }, { opacity: 0 }], { duration: 300 }), an(t, [{ opacity: 0 }, { opacity: 1 }], { duration: 300 })]);
  } else if (type === 'giant') {                       // lettre géante du titre → noir → scène nette
    const T = from.querySelector('.t'), o = T.dataset.o || '50% 50%';
    f.querySelectorAll(':scope > *:not(.t):not(.bg)').forEach((e) => an(e, [{ opacity: 1, filter: 'none' }, { opacity: 0, filter: 'blur(10px)' }], { duration: 700 }));
    an(T, [{ transform: 'scale(1)', opacity: 1 }, { transform: 'scale(22)', opacity: 1, offset: .8 }, { transform: 'scale(34)', opacity: 0 }], { duration: 1500, easing: 'cubic-bezier(.75,0,.9,.4)' });
    T.style.transformOrigin = o; T.style.color = '#f3ead7'; T.style.webkitTextFillColor = '#f3ead7';
    await wait(1250);
    an(f, [{ opacity: 1 }, { opacity: 0 }], { duration: 500 });
    await reveal(to, perf, { s: 1.14 }, 1400);
  } else if (type === 'eye') {                         // zoom dans le regard
    const o = from.dataset.eye || '50% 40%';
    f.style.transformOrigin = o;
    iris.style.setProperty('--x', o.split(' ')[0]); iris.style.setProperty('--y', o.split(' ')[1]);
    an(f, [{ transform: 'scale(1)', filter: 'brightness(1)' }, { transform: 'scale(9)', filter: 'brightness(.35)' }], { duration: 1500, easing: 'cubic-bezier(.6,0,.85,.5)' });
    await wait(700); an(iris, [{ '--r': '150%' }, { '--r': '2%' }], { duration: 800 });
    await wait(850); an(f, [{ opacity: 1 }, { opacity: 0 }], { duration: 200 });
    reveal(to, perf, { s: 1.35 }, 1500);
    await an(iris, [{ '--r': '2%' }, { '--r': '150%' }], { duration: 1300, easing: OUT });
  } else if (type === 'meet') {                        // les deux personnages se rejoignent
    f.querySelectorAll(':scope > *:not(.bg)').forEach((e) => an(e, [{ opacity: 1 }, { opacity: 0, filter: 'blur(8px)' }], { duration: 800 }));
    await wait(700);
    to.classList.add('meet'); an(t, [{ opacity: 0 }, { opacity: 1 }], { duration: 700 }); an(f, [{ opacity: 1 }, { opacity: 0 }], { duration: 700 });
    await wait(1700);
  } else if (type === 'rise') {                        // les trois cartes montent depuis le bas
    to.classList.add('rise');
    f.querySelectorAll(':scope > *:not(.bg)').forEach((e) => an(e, [{ opacity: 1, filter: 'none' }, { opacity: 0, filter: 'blur(14px)' }], { duration: 1000 }));
    an(t, [{ opacity: 0 }, { opacity: 1 }], { duration: 800 }); an(f, [{ opacity: 1 }, { opacity: 0 }], { duration: 1000, delay: 400 });
    await wait(1700);
  } else if (type === 'exit') {                        // dézoom : on sort de la vision du personnage
    an(f, [{ opacity: 1, transform: 'scale(1)', filter: 'none' }, { opacity: 0, transform: 'scale(.82)', filter: blur(18, perf) }], { duration: 1000 });
    await wait(600);
    iris.style.setProperty('--x', '45%'); iris.style.setProperty('--y', '35%'); an(iris, [{ '--r': '2%' }, { '--r': '150%' }], { duration: 1500, easing: OUT });
    await reveal(to, perf, { s: 2.4 }, 1700);
  } else if (type === 'back') {                        // retour arrière : léger zoom avant inversé
    an(f, [{ opacity: 1, transform: 'scale(1)', filter: 'none' }, { opacity: 0, transform: 'scale(1.25)', filter: blur(16, perf) }], { duration: 800 });
    await reveal(to, perf, { s: .86 }, 1000, 300);
  } else {                                             // 'out' : dézoom doux
    an(f, [{ opacity: 1, transform: 'scale(1)', filter: 'none' }, { opacity: 0, transform: 'scale(.78)', filter: blur(14, perf) }], { duration: 1000 });
    await reveal(to, perf, { s: 1.5 }, 1400, 350);
  }
  from.classList.remove('on');
  [f, t].forEach((e) => e.getAnimations().forEach((a) => a.cancel())); t.style.opacity = '';
  from.classList.remove('on', 'meet', 'rise'); from.style.zIndex = ''; to.style.zIndex = '';
  from.querySelectorAll('.t').forEach((e) => { e.style.transformOrigin = e.style.color = e.style.webkitTextFillColor = ''; });
}
