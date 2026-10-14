/* ========================================================
   script.js — Algorithm Website interactivity
   ======================================================== */

'use strict';

// ----------------------------------------------------------
// 1. Scrolling ticker counter (green number, Deity page)
// ----------------------------------------------------------
(function () {
  const tickerEl = document.getElementById('ticker');
  if (!tickerEl) return;

  let value = 136.97351;

  function updateTicker() {
    // Simulate a real-time data feed with small random fluctuations
    const delta = (Math.random() - 0.48) * 0.00312;
    value = Math.max(0, value + delta);
    tickerEl.textContent = value.toFixed(5);
  }

  setInterval(updateTicker, 800);
})();


// ----------------------------------------------------------
// 2. Active page-nav dot — updates based on scroll position
// ----------------------------------------------------------
(function () {
  const dots  = Array.from(document.querySelectorAll('.page-nav__dot'));
  const pages = Array.from(document.querySelectorAll('.page'));
  if (!dots.length || !pages.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const idx = pages.indexOf(entry.target);
        if (idx < 0) return;
        dots.forEach((d, i) => {
          d.classList.toggle('page-nav__dot--active', i === idx);
        });
      });
    },
    { threshold: 0.55 }
  );

  pages.forEach((p) => observer.observe(p));
})();


// ----------------------------------------------------------
// 3. Header: subtle scroll-triggered transparency
// ----------------------------------------------------------
(function () {
  const headers = document.querySelectorAll('.header');

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const header = entry.target.querySelector('.header');
        if (!header) return;
        header.style.opacity = entry.isIntersecting ? '1' : '0';
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.page').forEach((p) => io.observe(p));
})();


// ----------------------------------------------------------
// 4. Smooth scroll for in-page anchor links
// ----------------------------------------------------------
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// ----------------------------------------------------------
// 5. Random glitch offset animation on deity background
// ----------------------------------------------------------
(function () {
  const deity = document.querySelector('.page--deity');
  if (!deity) return;

  function applyGlitch() {
    if (Math.random() < 0.15) {
      const x = (Math.random() * 6 - 3).toFixed(1);
      const y = (Math.random() * 4 - 2).toFixed(1);
      deity.style.backgroundPosition = `calc(50% + ${x}px) calc(50% + ${y}px)`;
      setTimeout(() => {
        deity.style.backgroundPosition = '';
      }, 80);
    }
  }

  setInterval(applyGlitch, 600);
})();
