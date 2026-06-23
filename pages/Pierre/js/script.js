const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);

  let current = '';
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 80) current = section.id;
  });
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}, { passive: true });

const levelFill = document.querySelector('.level-fill');

const levelObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.style.width = entry.target.dataset.target + '%';
    levelObserver.unobserve(entry.target);
  });
}, { threshold: 0.5 });

if (levelFill) levelObserver.observe(levelFill);

function copyText(text) {
  if (navigator.clipboard) return navigator.clipboard.writeText(text);
  const el = document.createElement('textarea');
  el.value = text;
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  return Promise.resolve();
}

document.getElementById('discordCopy')?.addEventListener('click', () => {
  const username = document.getElementById('discordCopy').dataset.username;
  copyText(username).then(() => {
    const toast = document.getElementById('copiedToast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
  });
});

