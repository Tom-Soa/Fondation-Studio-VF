// ── Pill Nav — lamp indicator ──
(function initPillNav() {
  const lamp  = document.getElementById('pill-lamp');
  const items = document.querySelectorAll('.pill-item[data-page]');

  function moveLamp(el) {
    if (!lamp || !el) return;
    const inner = document.querySelector('.pill-inner');
    if (!inner) return;
    const iR = inner.getBoundingClientRect();
    const eR = el.getBoundingClientRect();
    lamp.style.left  = (eR.left - iR.left) + 'px';
    lamp.style.width = eR.width + 'px';
  }

  // Scroll spy intra-page (si sections présentes)
  const spySections = Array.from(items).map(i => i.dataset.page).filter(Boolean);
  if (spySections.length > 0) {
    window.addEventListener('scroll', function() {
      const y = window.scrollY;
      let current = null;
      spySections.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.offsetTop - 160 <= y) current = id;
      });
      if (current) {
        items.forEach(item => {
          const on = item.dataset.page === current;
          item.classList.toggle('active', on);
          if (on) moveLamp(item);
        });
      }
    });
  }

  requestAnimationFrame(() => {
    const active = document.querySelector('.pill-item.active');
    if (active) moveLamp(active);
  });
})();

// Smooth scroll
function scrollTo2(hash) {
  const el = document.querySelector(hash);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  });
});

// Reveal on scroll
(function() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();

// Pricing blur-in
(function() {
  const cards = document.querySelectorAll('.pricing-card');
  if (!cards.length) return;
  const blurObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const idx = Array.from(cards).indexOf(e.target);
        setTimeout(() => e.target.classList.add('blur-in'), idx * 120);
        blurObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  cards.forEach(el => blurObs.observe(el));
})();

// FAQ
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const body = item.querySelector('.faq-body');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => { i.classList.remove('open'); i.querySelector('.faq-body').style.maxHeight = '0'; });
  if (!isOpen) { item.classList.add('open'); body.style.maxHeight = body.scrollHeight + 'px'; }
}

// Toast
function showToast(msg, ok = true) {
  const t = document.getElementById('toast');
  const dot = t.querySelector('.toast-dot');
  document.getElementById('toast-msg').textContent = msg;
  dot.style.background = ok ? '#22c55e' : '#f87171';
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 4500);
}

// No-brainer form
function handleNobrainer() {
  const name = document.getElementById('nb-name').value.trim();
  const email = document.getElementById('nb-email').value.trim();
  const sector = document.getElementById('nb-sector').value.trim();
  const msg = document.getElementById('nb-message').value.trim();
  if (!name || !email || !sector || !msg) { showToast('Veuillez remplir tous les champs obligatoires.', false); return; }
  const btn = document.getElementById('nb-submit');
  btn.disabled = true;
  btn.innerHTML = '<svg class="spin" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg> Envoi en cours…';
  setTimeout(() => {
    ['nb-name','nb-email','nb-sector','nb-message'].forEach(id => document.getElementById(id).value = '');
    btn.disabled = false;
    btn.innerHTML = 'Demander ma page gratuite <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
    showToast('Demande reçue ! Je reviens vers vous sous 24h pour valider votre éligibilité.');
  }, 1500);
}

// Contact form
function handleSubmit() {
  const name = document.getElementById('f-name').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const msg = document.getElementById('f-message').value.trim();
  if (!name || !email || !msg) { showToast('Veuillez remplir les champs obligatoires.', false); return; }
  const btn = document.getElementById('submit-btn');
  btn.disabled = true;
  btn.innerHTML = '<svg class="spin" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg> Envoi en cours…';
  setTimeout(() => {
    ['f-name','f-email','f-phone','f-message'].forEach(id => document.getElementById(id).value = '');
    btn.disabled = false;
    btn.innerHTML = 'Envoyer ma demande <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
    showToast('Message envoyé ! Je vous réponds sous 24h avec un contrat.');
  }, 1500);
}

// ── HoverButton — ripple ──
(function initHoverButtons() {
  document.querySelectorAll('.cta-btn, .btn-ghost, .btn-nobrainer').forEach(btn => {
    let active = false, last = 0;
    const isPrimary = btn.classList.contains('cta-btn') || btn.classList.contains('btn-nobrainer');
    btn.addEventListener('pointerenter', () => { active = true; });
    btn.addEventListener('pointerleave', () => { active = false; });
    btn.addEventListener('pointermove', e => {
      if (!active) return;
      const now = Date.now();
      if (now - last < 100) return;
      last = now;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xRatio = x / btn.offsetWidth;
      const c = document.createElement('div');
      c.className = 'hbr';
      c.style.left = x + 'px';
      c.style.top  = y + 'px';
      c.style.background = isPrimary
        ? `linear-gradient(to right, rgba(255,180,100,0.9) ${xRatio*100}%, rgba(194,65,12,0.6) ${xRatio*100}%)`
        : `linear-gradient(to right, #a0d9f8 ${xRatio*100}%, #3a5bbf ${xRatio*100}%)`;
      btn.appendChild(c);
      requestAnimationFrame(() => c.classList.add('in'));
      setTimeout(() => { c.classList.remove('in'); c.classList.add('out'); }, 1000);
      setTimeout(() => c.remove(), 2200);
    });
  });
})();

// ── Corners Card — brackets ──
(function initCorners() {
  function addCorners(el, dark) {
    el.classList.add('corners-card');
    if (dark) el.classList.add('dark');
    ['c-tl','c-tr','c-bl','c-br'].forEach(cn => {
      const d = document.createElement('div'); d.className = cn; el.appendChild(d);
    });
  }
  document.querySelectorAll('.problem-card, .ben-card, .proc-step').forEach(el => addCorners(el, false));
  document.querySelectorAll('.sol-card').forEach(el => addCorners(el, true));
})();

// ── Timeline — Processus ──
(function initTimeline() {
  const section = document.getElementById('processus');
  if (!section) return;
  section.classList.add('timeline-section');
  const track = document.createElement('div'); track.className = 'timeline-track';
  const fill  = document.createElement('div'); fill.className  = 'timeline-fill';
  track.appendChild(fill); section.appendChild(track);
  function update() {
    const rect = section.getBoundingClientRect();
    const vh   = window.innerHeight;
    const p    = Math.min(Math.max(-(rect.top - vh * 0.9) / (rect.height - vh * 0.4), 0), 1);
    fill.style.height  = (p * 100) + '%';
    fill.style.opacity = Math.min(p * 10, 1);
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();
