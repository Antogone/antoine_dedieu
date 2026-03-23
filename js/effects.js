(function () {

  // ─── GOLDEN RIPPLE ON CLICK ────────────────────────────────────────────────

  const style = document.createElement('style');
  style.textContent = `
    @keyframes _mystical-ripple {
      0%   { width: 0;     height: 0;     opacity: 0.9; box-shadow: 0 0 0   0px rgba(201,168,76,0.35); }
      60%  { opacity: 0.5; }
      100% { width: 140px; height: 140px; opacity: 0;   box-shadow: 0 0 18px 6px rgba(201,168,76,0); }
    }
    @keyframes _mystical-ripple-inner {
      0%   { width: 0;    height: 0;    opacity: 0.6; }
      100% { width: 60px; height: 60px; opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  document.addEventListener('click', (e) => {
    const outer = document.createElement('div');
    outer.style.cssText = `
      position:fixed; left:${e.clientX}px; top:${e.clientY}px;
      width:0; height:0; border-radius:50%;
      border:1px solid rgba(201,168,76,0.75);
      transform:translate(-50%,-50%); pointer-events:none; z-index:9998;
      animation:_mystical-ripple 0.9s cubic-bezier(0.2,0.6,0.4,1) forwards;
    `;
    const inner = document.createElement('div');
    inner.style.cssText = `
      position:fixed; left:${e.clientX}px; top:${e.clientY}px;
      width:0; height:0; border-radius:50%;
      border:1px solid rgba(232,204,122,0.5);
      transform:translate(-50%,-50%); pointer-events:none; z-index:9998;
      animation:_mystical-ripple-inner 0.5s ease-out 0.05s forwards;
    `;
    document.body.appendChild(outer);
    document.body.appendChild(inner);
    setTimeout(() => { outer.remove(); inner.remove(); }, 950);
  });


  // ─── BACKGROUND STARFIELD ─────────────────────────────────────────────────
  // Skip on pages that already have a full-page star canvas
  if (document.getElementById('skyCanvas') || document.getElementById('starfield')) return;

  const bgCanvas = document.createElement('canvas');
  bgCanvas.style.cssText = 'position:fixed;inset:0;z-index:0;pointer-events:none;';
  // Insert as first child so it sits behind everything
  document.body.insertBefore(bgCanvas, document.body.firstChild);
  const bCtx = bgCanvas.getContext('2d');

  const stars = [];

  function initStars() {
    stars.length = 0;
    bgCanvas.width  = window.innerWidth;
    bgCanvas.height = window.innerHeight;
    // ~1 star per 7 000 px² — capped at 160
    const count = Math.min(160, Math.floor((bgCanvas.width * bgCanvas.height) / 7000));
    for (let i = 0; i < count; i++) {
      stars.push({
        x:        Math.random() * bgCanvas.width,
        y:        Math.random() * bgCanvas.height,
        r:        Math.random() * 0.85 + 0.25,
        phase:    Math.random() * Math.PI * 2,
        speed:    Math.random() * 0.5 + 0.25,
        maxAlpha: Math.random() * 0.45 + 0.15,
      });
    }
  }
  initStars();
  window.addEventListener('resize', initStars);

  function drawBg(ts) {
    bCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
    for (const s of stars) {
      const alpha = s.maxAlpha * (0.5 + 0.5 * Math.sin(ts * 0.001 * s.speed + s.phase));
      bCtx.beginPath();
      bCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      bCtx.fillStyle = `rgba(220, 225, 255, ${alpha})`;
      bCtx.fill();
    }
    requestAnimationFrame(drawBg);
  }
  requestAnimationFrame(drawBg);

})();
