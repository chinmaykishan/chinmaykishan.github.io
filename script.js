// Menu Toggle
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
  document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
}

// Scroll Reveal Animation
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all reveal elements
document.querySelectorAll('.reveal, .product-image').forEach(el => {
  observer.observe(el);
});

// Parallax effect for hero image
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroImg = document.getElementById('hero-img');
  if (heroImg) {
    heroImg.style.transform = `translateY(${scrolled * 0.1}px) scale(${1 + scrolled * 0.0001})`;
  }
});

// Footer nav stagger animation
const footerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.footer-nav a').forEach((link, i) => {
        setTimeout(() => link.classList.add('visible'), i * 50);
      });
    }
  });
}, { threshold: 0.2 });

const footer = document.querySelector('.footer');
if (footer) {
  footerObserver.observe(footer);
}
