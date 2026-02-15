// Año
document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});

/* ===== DESTELLOS SIMPLE ===== */
(function(){
  let layer = document.querySelector('.spark-layer');

  if(!layer){
    layer = document.createElement('div');
    layer.className = 'spark-layer';
    document.body.appendChild(layer);
  }

  const MAX = 3;
  const EVERY = 1200;
  const SAFE_TOP = 90;
  const rand = (a,b)=>Math.random()*(b-a)+a;

  function spawn(){
    if(layer.childElementCount >= MAX) return;

    const s = document.createElement('span');
    s.className = 'spark';

    const w = innerWidth, h = innerHeight;

    s.style.left = rand(40, w-40) + 'px';
    s.style.top  = rand(SAFE_TOP, h-60) + 'px';

    s.style.setProperty('--dur', Math.round(rand(520, 820)) + 'ms');

    layer.appendChild(s);
    s.addEventListener('animationend', ()=>s.remove(), { once:true });
  }

  setInterval(spawn, EVERY);
})();
