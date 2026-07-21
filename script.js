// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

function setMenuOpen(open) {
  if (!navLinks || !navToggle) return;
  navLinks.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
}

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    setMenuOpen(!navLinks.classList.contains('open'));
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenuOpen(false);
  });

  // Close if viewport grows past mobile
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) setMenuOpen(false);
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

// Active nav highlight — map page sections to Google Sites-style nav labels
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
const sectionToNav = {
  about: 'about',
  pitch: 'about',
  experience: 'about',
  portfolio: 'portfolio',
  skills: 'portfolio',
  hire: 'hire',
  contact: 'contact',
};

const observed = document.querySelectorAll(
  '#about, #pitch, #experience, #portfolio, #skills, #hire, #contact'
);

if (observed.length && navAnchors.length && 'IntersectionObserver' in window) {
  const byHref = new Map(
    Array.from(navAnchors).map((a) => [a.getAttribute('href').slice(1), a])
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const navKey = sectionToNav[entry.target.id];
        if (!navKey) return;
        navAnchors.forEach((a) => a.classList.remove('active'));
        const active = byHref.get(navKey);
        if (active) active.classList.add('active');
      });
    },
    {
      rootMargin: '-35% 0px -50% 0px',
      threshold: 0,
    }
  );

  observed.forEach((section) => observer.observe(section));
}
