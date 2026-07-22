// Mobile nav
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

function setMenuOpen(open) {
  if (!navLinks || !navToggle) return;
  navLinks.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  const label = navToggle.querySelector('span');
  if (label) label.textContent = open ? 'CLOSE' : 'MENU';
}

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    setMenuOpen(!navLinks.classList.contains('open'));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenuOpen(false);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) setMenuOpen(false);
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

// Active nav by section
// Map content sections → primary nav targets
const sectionMap = {
  work: 'work',
  skills: 'work',
  experience: 'experience',
  about: 'experience',
  pitch: 'pitch',
  writing: 'pitch',
  hire: 'hire',
  contact: 'contact',
};

const anchors = document.querySelectorAll('.nav a[href^="#"]');
const sections = document.querySelectorAll(
  '#work, #skills, #experience, #pitch, #writing, #hire, #contact'
);

if (anchors.length && sections.length && 'IntersectionObserver' in window) {
  const byHash = new Map(
    Array.from(anchors).map((a) => [a.getAttribute('href').slice(1), a])
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const navKey = sectionMap[entry.target.id];
        if (!navKey) return;
        anchors.forEach((a) => a.classList.remove('active'));
        const active = byHash.get(navKey);
        if (active) active.classList.add('active');
      });
    },
    { rootMargin: '-28% 0px -55% 0px', threshold: 0 }
  );

  sections.forEach((s) => observer.observe(s));
}
