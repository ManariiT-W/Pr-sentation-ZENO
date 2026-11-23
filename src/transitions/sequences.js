'use strict';
// Image-based camera choreography, not volumetric character animation.
window.ZENO_TRANSITIONS = [
 {name:'Entrer dans le regard',out:'scale(3.8)',into:'scale(1.2)',origin:'50% 28%',duration:1200},
 {name:'Retour à ZENO',out:'scale(.82)',into:'scale(1.15)',origin:'50% 40%',duration:1000},
 {name:'Rencontre commerciale',out:'translateX(-150px) scale(1.18)',into:'translateX(100px) scale(1.4)',origin:'50% 75%',duration:1150},
 {name:'Recul vers l’analyse',out:'scale(.8)',into:'translateX(-70px) scale(1.07)',origin:'45% 70%',duration:1000},
 {name:'Révélation des avantages',out:'translateY(-35px)',into:'translateY(80px)',origin:'50% 50%',duration:900},
 {name:'La communication',out:'translateY(35px)',into:'scale(1.12)',origin:'50% 40%',duration:1000},
 {name:'Première personne',out:'scale(.75)',into:'translateY(70px) scale(1.08)',origin:'65% 75%',duration:1100},
 {name:'Place aux chiffres',out:'translateY(80px) scale(.9)',into:'scale(1.035)',origin:'50% 50%',duration:900},
 {name:'Sortir de la vision',out:'scale(.8)',into:'scale(3.8)',origin:'50% 28%',duration:1250}
];
window.ZenoTransition = (() => {
 let animations=[];
 const cancel=()=>{animations.forEach(a=>a.cancel());animations=[];};
 function animate(el,frames,options){if(!el||!el.animate)return;const a=el.animate(frames,options);animations.push(a);return a;}
 async function play(from,to,fromIndex,toIndex,reduced){
  cancel();
  if(reduced||!from.animate)return;
  const adjacent=Math.abs(toIndex-fromIndex)===1;
  const sequence=adjacent?window.ZENO_TRANSITIONS[Math.min(fromIndex,toIndex)]:{out:'scale(.97)',into:'scale(1.03)',origin:'50% 50%',duration:450};
  const reverse=toIndex<fromIndex;
  const out=reverse?sequence.into:sequence.out;
  const into=reverse?sequence.out:sequence.into;
  const duration=sequence.duration;
  const timing={duration,easing:'cubic-bezier(.25,.1,.25,1)',fill:'both'};
  const oldImage=from.querySelector('.cinema, .manarii-portrait');
  const newImage=to.querySelector('.cinema, .manarii-portrait');
  animate(from.querySelector('.content'),[{opacity:1,transform:'none'},{opacity:0,transform:'translateY(-15px)'}],{...timing,duration:duration*.42});
  animate(to.querySelector('.content'),[{opacity:0,transform:into},{opacity:1,transform:'none'}],{...timing,delay:duration*.45,duration:duration*.55});
  animate(oldImage,[{opacity:1,transform:'none',transformOrigin:sequence.origin},{opacity:0,transform:out,transformOrigin:sequence.origin}],timing);
  animate(newImage,[{opacity:0,transform:into,transformOrigin:sequence.origin},{opacity:1,transform:'none',transformOrigin:sequence.origin}],timing);
  animate(from.querySelector('.hero-emblem'),[{opacity:1},{opacity:0}],{...timing,duration:duration*.3});
  animate(to.querySelector('.hero-emblem'),[{opacity:0},{opacity:1}],{...timing,delay:duration*.55,duration:duration*.45});
  if(toIndex===5){to.querySelectorAll('.value-card').forEach((card,i)=>animate(card,[{transform:'translateY(70px)',opacity:0},{transform:'none',opacity:1}],{...timing,delay:250+i*90,duration:650}));}
  const veil=document.getElementById('transition-veil');
  const end=animate(veil,[{opacity:0},{opacity:.8,offset:.45},{opacity:0}],timing);
  if(end){try{await end.finished;}catch(_){} }
 }
 return {play,cancel};
})();
