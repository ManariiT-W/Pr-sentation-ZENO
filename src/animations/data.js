'use strict';
window.ZenoData = (() => {
 let token=0;const frames=new Set();const originals=new Map();const knownRings=new Set();
 function stop(){token++;frames.forEach(cancelAnimationFrame);frames.clear();originals.forEach((text,el)=>el.textContent=text);knownRings.forEach(el=>el.style.strokeDashoffset=String(100-Number(el.dataset.percent)));}
 function show(scene,reduced){
  stop();const current=token;
  const rings=Array.from(scene.querySelectorAll('.ring-fill'));
  rings.forEach(el=>knownRings.add(el));
  const counters=Array.from(scene.querySelectorAll('[data-count]'));
  counters.forEach(el=>{if(!originals.has(el))originals.set(el,el.textContent);});
  const finish=()=>{rings.forEach(el=>el.style.strokeDashoffset=String(100-Number(el.dataset.percent)));counters.forEach(el=>el.textContent=originals.get(el));};
  if(reduced){finish();return;}
  const start=performance.now();
  const tick=now=>{
   if(current!==token)return;
   const progress=Math.min(1,(now-start)/950);const eased=1-Math.pow(1-progress,3);
   rings.forEach(el=>el.style.strokeDashoffset=String(100-Number(el.dataset.percent)*eased));
   counters.forEach(el=>{el.textContent=progress===1?originals.get(el):Math.round(Number(el.dataset.count)*eased).toLocaleString('fr-FR').replace(/[\u202f\u00a0]/g,' ')+' F';});
   if(progress<1){const id=requestAnimationFrame(t=>{frames.delete(id);tick(t);});frames.add(id);}else finish();
  };
  if(rings.length||counters.length)tick(start);
 }
 return {show,stop};
})();
