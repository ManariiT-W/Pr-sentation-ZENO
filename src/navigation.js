'use strict';
window.ZenoNavigation={init(stage,step){
 const bar=document.querySelector('footer');let idle;let touch=null;
 function show(){
  bar.classList.remove('nav-hidden');clearTimeout(idle);
  idle=setTimeout(()=>{if(!bar.matches(':focus-within')||!document.activeElement.matches(':focus-visible'))bar.classList.add('nav-hidden');},2600);
 }
 ['pointermove','pointerdown','keydown','focusin'].forEach(type=>document.addEventListener(type,show,{passive:true}));
 bar.addEventListener('focusout',show);bar.addEventListener('pointerenter',show);
 stage.addEventListener('pointerdown',e=>{
  if(e.pointerType!=='touch'||e.target.closest('button'))return;
  touch={id:e.pointerId,x:e.clientX,y:e.clientY};
 });
 stage.addEventListener('pointerup',e=>{
  if(!touch||e.pointerId!==touch.id)return;
  const dx=e.clientX-touch.x,dy=e.clientY-touch.y;touch=null;
  if(Math.abs(dx)>65&&Math.abs(dx)>Math.abs(dy)*1.6){step(dx<0?1:-1);show();}
 });
 stage.addEventListener('pointercancel',()=>touch=null);
 show();
}};
