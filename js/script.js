const cards = document.querySelectorAll('.cv-card');
const topbar = document.querySelector('.topbar');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${i * 80}ms`;
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

cards.forEach((card) => observer.observe(card));

window.addEventListener('scroll', () => {
  topbar.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

document.addEventListener('mousemove', (e) => {
  document.body.style.setProperty('--cx', `${e.clientX}px`);
  document.body.style.setProperty('--cy', `${e.clientY}px`);
}, { passive: true });
