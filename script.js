/* ============================================
   SoloForte — Pitch Deck
   Navigation: keyboard, touch, buttons
   ============================================ */

(function () {
  const slides    = document.querySelectorAll('.slide');
  const total     = slides.length;
  const prevBtn   = document.getElementById('prev');
  const nextBtn   = document.getElementById('next');
  const counter   = document.getElementById('counter');
  const progress  = document.getElementById('progress');
  const hint      = document.getElementById('hint');

  let current = 0;
  let isAnimating = false;

  function update(i) {
    if (isAnimating) return;
    if (i < 0 || i >= total || i === current) return;

    isAnimating = true;

    slides[current].classList.remove('active');
    current = i;
    slides[current].classList.add('active');

    counter.textContent = `${current + 1} / ${total}`;
    progress.style.width = `${((current + 1) / total) * 100}%`;

    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === total - 1;

    // Reset URL hash for shareable slide links
    if (history.replaceState) {
      history.replaceState(null, '', `#${current + 1}`);
    }

    setTimeout(() => { isAnimating = false; }, 600);
  }

  function go(delta) {
    update(current + delta);
  }

  // Buttons
  prevBtn.addEventListener('click', () => go(-1));
  nextBtn.addEventListener('click', () => go(1));

  // Keyboard
  document.addEventListener('keydown', (e) => {
    // Ignore if user is typing somewhere
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    switch (e.key) {
      case 'ArrowRight':
      case 'PageDown':
      case ' ':
        e.preventDefault();
        go(1);
        break;
      case 'ArrowLeft':
      case 'PageUp':
        e.preventDefault();
        go(-1);
        break;
      case 'Home':
        e.preventDefault();
        update(0);
        break;
      case 'End':
        e.preventDefault();
        update(total - 1);
        break;
      case 'f':
      case 'F':
        e.preventDefault();
        toggleFullscreen();
        break;
    }
  });

  // Touch swipe
  let touchStartX = 0;
  let touchStartY = 0;
  let touchTime = 0;

  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
    touchTime = Date.now();
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    const dt = Date.now() - touchTime;

    // Ignore slow drags and vertical scrolls
    if (dt > 600) return;
    if (Math.abs(dy) > Math.abs(dx)) return;
    if (Math.abs(dx) < 50) return;

    if (dx < 0) go(1);
    else go(-1);
  }, { passive: true });

  // Fullscreen toggle
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }

  // Mouse wheel (gentle — debounced)
  let wheelLock = false;
  document.addEventListener('wheel', (e) => {
    if (wheelLock) return;
    if (Math.abs(e.deltaY) < 30) return;

    wheelLock = true;
    if (e.deltaY > 0) go(1);
    else go(-1);

    setTimeout(() => { wheelLock = false; }, 700);
  }, { passive: true });

  // Init from URL hash if present
  function initFromHash() {
    const hash = window.location.hash.replace('#', '');
    const n = parseInt(hash, 10);
    if (!isNaN(n) && n >= 1 && n <= total) {
      slides[0].classList.remove('active');
      current = n - 1;
    }
    slides[current].classList.add('active');
    counter.textContent = `${current + 1} / ${total}`;
    progress.style.width = `${((current + 1) / total) * 100}%`;
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === total - 1;
  }

  initFromHash();

  // Auto-hide hint after a few seconds
  setTimeout(() => {
    if (hint) hint.classList.add('hidden');
  }, 4500);

  // Preload images so transitions feel snappy
  document.querySelectorAll('.phone-screen img, .founder-photo img, .logo-mark img').forEach(img => {
    const src = img.getAttribute('src');
    if (src) {
      const preload = new Image();
      preload.src = src;
    }
  });

  // Hide placeholder once the avatar/phone/logo image successfully loads
  document.querySelectorAll('.avatar-slot img, .avatar-corner img, .phone-screen img, .founder-photo img, .logo-mark img').forEach(img => {
    const handle = () => {
      const ph = img.parentElement.querySelector('.placeholder, span');
      if (ph) ph.style.display = 'none';
    };
    if (img.complete && img.naturalWidth > 0) handle();
    img.addEventListener('load', handle);
  });
})();
