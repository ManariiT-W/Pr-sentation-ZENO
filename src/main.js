'use strict';
(() => {
 const stage=document.getElementById('stage');
 document.getElementById('slides').innerHTML=window.ZENO_SLIDES.join('');
 const scenes=Array.from(document.querySelectorAll('.scene'));
 const previous=document.getElementById('previous'),next=document.getElementById('next');
 const motion=document.getElementById('performance');
 const motionQuery=matchMedia('(prefers-reduced-motion: reduce)');
 let reduced=motionQuery.matches,index=0,busy=false,queued=null,version=0;
 const chapters=document.getElementById('chapters');
 scenes.forEach((scene,i)=>{
  const button=document.createElement('button');button.textContent=String(i+1).padStart(2,'0');button.setAttribute('aria-label','Diapo '+(i+1));button.addEventListener('click',()=>go(i));chapters.appendChild(button);
 });
 function fit(){const scale=Math.min(innerWidth/1600,innerHeight/900);stage.style.transform=`scale(${scale})`;stage.style.left=`${(innerWidth-1600*scale)/2}px`;stage.style.top=`${(innerHeight-900*scale)/2}px`;}
 function state(){
  scenes.forEach((scene,i)=>{scene.classList.toggle('active',i===index);scene.setAttribute('aria-hidden',String(i!==index));scene.inert=i!==index;});
  Array.from(chapters.children).forEach((button,i)=>{if(i===index)button.setAttribute('aria-current','page');else button.removeAttribute('aria-current');});
  previous.disabled=index===0;next.disabled=index===scenes.length-1;
  document.getElementById('position').textContent=String(index+1).padStart(2,'0')+' / 10';
  stage.classList.toggle('performance',reduced);motion.setAttribute('aria-pressed',String(reduced));
 }
 async function go(target){
  if(target<0||target>=scenes.length)return;
  if(busy){queued=target;return;}
  if(target===index)return;
  busy=true;const run=++version;const old=index;const from=scenes[old];
  window.ZenoData.stop();from.classList.add('departing');index=target;state();
  try{await window.ZenoTransition.play(from,scenes[index],old,index,reduced);}catch(_){reduced=true;}
  if(run!==version)return;
  window.ZenoTransition.cancel();from.classList.remove('departing');busy=false;state();window.ZenoData.show(scenes[index],reduced);
  if(queued!==null){const pending=queued;queued=null;go(pending);}
 }
 function step(delta){go(Math.min(scenes.length-1,Math.max(0,(queued===null?index:queued)+delta)));}
 function setMotion(value){reduced=value;window.ZenoTransition.cancel();state();window.ZenoData.show(scenes[index],reduced);}
 previous.addEventListener('click',()=>step(-1));next.addEventListener('click',()=>step(1));
 motion.addEventListener('click',()=>setMotion(!reduced));motionQuery.addEventListener('change',event=>setMotion(event.matches));
 async function fullscreen(){
  try{if(document.fullscreenElement)await document.exitFullscreen();else if(document.documentElement.requestFullscreen)await document.documentElement.requestFullscreen();else throw new Error('unavailable');}
  catch(_){document.getElementById('status').textContent='Utilisez F11 pour le plein écran.';}
 }
 document.getElementById('fullscreen').addEventListener('click',fullscreen);
 document.addEventListener('fullscreenchange',()=>{document.getElementById('fullscreen').textContent=document.fullscreenElement?'Quitter le plein écran':'Plein écran';document.getElementById('status').textContent='';fit();});
 addEventListener('resize',fit);
 addEventListener('beforeprint',()=>{window.ZenoData.stop();document.querySelectorAll('.ring-fill').forEach(el=>el.style.strokeDashoffset=String(100-Number(el.dataset.percent)));});
 document.addEventListener('keydown',event=>{
  if(event.altKey||event.ctrlKey||event.metaKey||event.target.matches?.('input,textarea,select,[contenteditable="true"]'))return;
  if(event.key===' '&&event.target.matches?.('button'))return;
  if(['ArrowRight','PageDown',' '].includes(event.key)){event.preventDefault();step(1);}
  if(['ArrowLeft','PageUp'].includes(event.key)){event.preventDefault();step(-1);}
  if(event.key==='Home'){event.preventDefault();go(0);}
  if(event.key==='End'){event.preventDefault();go(scenes.length-1);}
  if(event.key.toLowerCase()==='f')fullscreen();
  if(event.key.toLowerCase()==='p')setMotion(!reduced);
 });
 document.addEventListener('visibilitychange',()=>{if(document.hidden){window.ZenoTransition.cancel();window.ZenoData.stop();}});
 // No autoplay. Media failure cannot block navigation or content.
 document.querySelectorAll('img').forEach(img=>img.addEventListener('error',()=>{img.style.visibility='hidden';}));
 state();fit();window.ZenoData.show(scenes[0],reduced);window.ZenoMedia.preload();
})();
