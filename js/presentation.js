'use strict';
(() => {
  const stage = document.getElementById('stage');
  const scenes = Array.from(document.querySelectorAll('.scene'));
  const motionQuery = matchMedia('(prefers-reduced-motion: reduce)');
  const counterFrames = new Map();
  const counterText = new Map();
  const motionButton = document.getElementById('motion');
  let index = 0;
  let performanceMode = motionQuery.matches;
  let generation = 0;
  let ringFrame = 0;
  document.querySelectorAll('[data-counter]').forEach(element => counterText.set(element, element.textContent));

  function fit() {
    const scale = Math.min(innerWidth / 1600, innerHeight / 900);
    stage.style.transform = `scale(${scale})`;
    stage.style.left = `${(innerWidth - 1600 * scale) / 2}px`;
    stage.style.top = `${(innerHeight - 900 * scale) / 2}px`;
  }
  function stopCounters() {
    counterFrames.forEach(frame => cancelAnimationFrame(frame));
    counterFrames.clear();
    counterText.forEach((text, element) => { element.textContent = text; });
  }
  function animateCounter(element, token) {
    const target = Number(element.dataset.counter);
    const finalText = counterText.get(element);
    if (performanceMode) { element.textContent = finalText; return; }
    const start = performance.now();
    function update(now) {
      if (token !== generation) return;
      const progress = Math.min((now - start) / 1100, 1);
      if (progress === 1) {
        element.textContent = finalText;
        counterFrames.delete(element);
        return;
      }
      const amount = Math.round(target * (1 - Math.pow(1 - progress, 3)));
      element.textContent = amount.toLocaleString('fr-FR').replace(/[\u202f\u00a0]/g, ' ') + ' F';
      counterFrames.set(element, requestAnimationFrame(update));
    }
    counterFrames.set(element, requestAnimationFrame(update));
  }
  function show(next) {
    if (next < 0 || next >= scenes.length) return;
    index = next;
    generation += 1;
    const token = generation;
    stopCounters();
    cancelAnimationFrame(ringFrame);
    scenes.forEach((scene, current) => {
      const active = current === index;
      scene.classList.toggle('active', active);
      scene.setAttribute('aria-hidden', String(!active));
      scene.inert = !active;
    });
    const scene = scenes[index];
    stage.dataset.scene = scene.id;
    document.getElementById('position').textContent = `${scene.dataset.number.padStart(2, '0')} / 10`;
    document.getElementById('previous').disabled = index === 0;
    document.getElementById('next').disabled = index === scenes.length - 1;
    document.querySelectorAll('[data-target]').forEach(button => {
      if (Number(button.dataset.target) === index) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    });
    const rings = scene.querySelectorAll('.ring-value');
    rings.forEach(value => {
      const progress = value.previousElementSibling.querySelector('.ring-progress');
      progress.style.transition = 'none';
      progress.style.strokeDashoffset = '100';
    });
    ringFrame = requestAnimationFrame(() => {
      ringFrame = requestAnimationFrame(() => {
        if (token !== generation) return;
        rings.forEach(value => {
          const progress = value.previousElementSibling.querySelector('.ring-progress');
          progress.style.transition = performanceMode ? 'none' : '';
          progress.style.strokeDashoffset = String(100 - Number(value.dataset.ringValue));
        });
      });
    });
    scene.querySelectorAll('[data-counter]').forEach(element => animateCounter(element, token));
  }
  function setMotion(reduced) {
    performanceMode = reduced;
    stage.classList.toggle('performance', reduced);
    motionButton.setAttribute('aria-pressed', String(reduced));
    show(index);
  }
  document.querySelectorAll('[data-target]').forEach(button => button.addEventListener('click', () => show(Number(button.dataset.target))));
  document.getElementById('previous').addEventListener('click', () => show(index - 1));
  document.getElementById('next').addEventListener('click', () => show(index + 1));
  motionButton.addEventListener('click', () => setMotion(motionQuery.matches || !performanceMode));
  motionQuery.addEventListener('change', event => setMotion(event.matches));
  document.getElementById('fullscreen').addEventListener('click', async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch { document.getElementById('fullscreen').textContent = 'Utiliser F11'; }
  });
  document.addEventListener('fullscreenchange', () => {
    document.getElementById('fullscreen').textContent = document.fullscreenElement ? 'Quitter le plein écran' : 'Plein écran';
    fit();
  });
  addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.target.closest('button')) return;
    if (['ArrowRight', 'PageDown', ' '].includes(event.key)) { event.preventDefault(); show(index + 1); }
    if (['ArrowLeft', 'PageUp'].includes(event.key)) { event.preventDefault(); show(index - 1); }
    if (event.key === 'Home') { event.preventDefault(); show(0); }
    if (event.key === 'End') { event.preventDefault(); show(scenes.length - 1); }
  });
  addEventListener('resize', fit);
  document.fonts.ready.then(fit);
  fit();
  setMotion(performanceMode);
})();
