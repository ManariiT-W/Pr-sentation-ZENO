'use strict';
window.ZenoMedia = {
 preload(){
  return Promise.all(['open','handshake','thinking','conversation','pov'].map(name=>new Promise(resolve=>{
   const img=new Image();img.onload=()=>{if(img.decode)img.decode().catch(()=>{}).finally(resolve);else resolve();};img.onerror=resolve;img.src='assets/characters/'+name+'.png';
  })));
 }
};
