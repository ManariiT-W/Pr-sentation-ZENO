'use strict';
// Images are not articulated 3D. Handshake/release remain fallback tracks.
window.ZENO_TRANSITIONS=[
 {name:'Entrer dans le regard',duration:1850,out:'scale(28)',into:'scale(1.9)',origin:'50% 24%',type:'eye',title:5.8},
 {name:'Retour vers ZENO',duration:1700,out:'scale(.32)',into:'scale(1.8)',origin:'50% 35%',type:'retreat',title:.2},
 {name:'Rencontre professionnelle',duration:1800,out:'scale(.2)',into:'scale(.65)',origin:'50% 65%',type:'meeting',requires:'articulated-handshake',title:.3},
 {name:'Traversée vers l’étude',duration:1750,out:'scale(6)',into:'scale(1.55)',origin:'46% 83%',type:'crossing',requires:'hands-release',title:6.5},
 {name:'Révélation des avantages',duration:1350,out:'translateX(-70px) scale(.9)',into:'scale(1)',origin:'35% 50%',type:'cards',title:1.1},
 {name:'Rencontre et communication',duration:1600,out:'scale(.45)',into:'scale(1.55)',origin:'50% 38%',type:'conversation',title:.4},
 {name:'Changement de point de vue',duration:1850,out:'scale(.28)',into:'translateY(130px) scale(1.5)',origin:'75% 80%',type:'pov',title:.4},
 {name:'Les données financières',duration:1700,out:'translateY(180px) scale(.6)',into:'scale(1)',origin:'65% 70%',type:'finance',title:5.2},
 {name:'Sortie de la vision',duration:2900,out:'scale(.12)',into:'scale(24)',origin:'50% 24%',type:'finale',title:.08}
];
window.ZenoTransition=(()=>{
 let animations=[];
 function cancel(){const old=animations;animations=[];old.forEach(a=>a.cancel());}
 const frame=(offset,opacity,transform='none',blur=0)=>({offset,opacity,transform,filter:`blur(${blur}px)`});
 async function play(from,to,fromIndex,toIndex,reduced){
  cancel();if(reduced||!from.animate)return;
  const adjacent=Math.abs(toIndex-fromIndex)===1;
  const reversed=adjacent&&toIndex<fromIndex;
  const a=reversed?to:from,b=reversed?from:to;
  const s=adjacent?window.ZENO_TRANSITIONS[Math.min(fromIndex,toIndex)]:{duration:650,out:'scale(1.3)',into:'scale(.9)',origin:'50% 50%',type:'jump',title:1.25};
  const tracks=[],add=(el,keyframes)=>{if(el)tracks.push([el,keyframes]);};
  add(a.querySelector('.content'),[frame(0,1),frame(.12,1),frame(.48,0,'scale(.88)',5),frame(1,0,'scale(.88)',5)]);
  add(b.querySelector('.content'),[frame(0,0,'scale(1.13)',8),frame(.38,0,'scale(1.13)',8),frame(.86,1),frame(1,1)]);
  add(a.querySelector('.cinema, .manarii-portrait'),[frame(0,1),frame(.12,1,'scale(1.04)'),frame(.58,0,s.out,10),frame(1,0,s.out,10)].map(f=>({...f,transformOrigin:s.origin})));
  add(b.querySelector('.cinema, .manarii-portrait'),[frame(0,0,s.into,10),frame(.28,0,s.into,10),frame(.48,.7,s.type==='finale'?'scale(6)':s.into,5),frame(.95,1),frame(1,1)].map(f=>({...f,transformOrigin:s.origin})));
  add(a.querySelector('.hero-emblem'),[frame(0,1),frame(.2,0,'scale(1.7)',3),frame(1,0)]);
  add(b.querySelector('.hero-emblem'),[frame(0,0),frame(.7,0),frame(1,1)]);
  const title=document.getElementById('motion-title');title.textContent=a.querySelector('h1,h2')?.textContent||'';
  title.style.transformOrigin=s.type==='eye'?'50% 50%':'38% 50%';
  add(title,[frame(0,0,'scale(.7)'),frame(.12,.45,'scale(.9)'),frame(.43,.62,`scale(${s.title})`,3),frame(.65,0,`scale(${s.title*1.2})`,12),frame(1,0)]);
  let group,initial;
  if(s.type==='cards'){group=b.querySelectorAll('.value-card');initial='translateY(210px) scale(.78)';}
  else if(s.type==='finance'){group=b.querySelectorAll('.finance-card');initial='translateY(60px) scale(1.35)';}
  else if(s.type==='retreat'){group=b.querySelectorAll('.offer-item');initial='translateY(80px) scale(1.25)';}
  else if(s.type==='pov'){group=b.querySelectorAll('.mix8-track li');initial='translateX(90px) scale(.8)';}
  else if(s.type==='conversation'){group=b.querySelectorAll('.sales7-card');initial='translateY(65px) scale(.88)';}
  if(group)group.forEach((el,i)=>{const begin=.35+i*.035;add(el,[frame(0,0,initial,7),frame(begin,0,initial,7),frame(Math.min(.93,begin+.4),1),frame(1,1)]);});
  if(s.type==='finance')b.querySelectorAll('[data-count]').forEach((el,i)=>add(el,[frame(0,0,'scale(1.9)',5),frame(.43+i*.025,0,'scale(1.9)',5),frame(.9,1),frame(1,1)]));
  add(document.getElementById('transition-veil'),[{offset:0,opacity:0},{offset:.35,opacity:0},{offset:.48,opacity:s.type==='eye'?.78:.28},{offset:.66,opacity:0},{offset:1,opacity:0}]);
  const light=document.getElementById('motion-light');light.className=s.type;
  add(light,s.type==='finale'?[{offset:0,opacity:0},{offset:.7,opacity:0},{offset:.88,opacity:.4},{offset:1,opacity:0}]:[{offset:0,opacity:0},{offset:.25,opacity:.2},{offset:.5,opacity:.08},{offset:1,opacity:0}]);
  if(s.type==='crossing')b.querySelectorAll('.ring-fill').forEach(el=>add(el,[{offset:0,strokeDashoffset:100},{offset:.4,strokeDashoffset:100},{offset:.9,strokeDashoffset:100-Number(el.dataset.percent)},{offset:1,strokeDashoffset:100-Number(el.dataset.percent)}]));
  const clock=document.timeline?.currentTime;
  for(const [el,keyframes] of tracks){
   const animation=el.animate(keyframes,{duration:s.duration,fill:'both',direction:reversed?'reverse':'normal',easing:'cubic-bezier(.4,0,.2,1)'});
   if(clock!=null)animation.startTime=clock;
   animations.push(animation);
  }
  await Promise.all(animations.map(animation=>animation.finished.catch(()=>{})));
 }
 return {play,cancel};
})();
