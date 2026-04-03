// ===========================
//   FRESHCART — main.js
// ===========================

// ----- Navbar scroll effect -----
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ----- Mobile burger menu -----
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

if (burger) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Close menu when a link is clicked
document.querySelectorAll('.nav__links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ----- Scroll reveal animation -----
const revealElements = document.querySelectorAll(
  '.step, .pricing-card, .feat-item, .city-card, .hiw-step, .feature-big-card, .value-card'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, index * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  revealObserver.observe(el);
});

// ----- Contact form handler -----
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.textContent = '✅ Message Sent!';
    btn.style.background = '#43A047';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.style.background = '';
      btn.disabled = false;
      contactForm.reset();
    }, 3000);
  });
}

// ----- Active nav link highlight -----
const currentPage = window.location.pathname.split('/').pop();
document.querySelectorAll('.nav__links a').forEach(link => {
  const linkPage = link.getAttribute('href').split('/').pop();
  if (linkPage === currentPage) {
    link.style.color = '#2E7D32';
    link.style.fontWeight = '600';
  }
});