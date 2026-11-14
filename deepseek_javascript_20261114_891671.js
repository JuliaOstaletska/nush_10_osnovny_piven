// Автоматичне виділення активного слайда в навігації
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const navLinks = document.querySelectorAll('.progress-nav a');

  // Підсвічування активного пункту навігації
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.style.background =
              link.getAttribute('href') === `#${id}`
                ? 'var(--accent)'
                : 'rgba(255,255,255,0.12)';
          });
        }
      });
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
  );

  slides.forEach((slide) => observer.observe(slide));

  // Плавна прокрутка при кліку на навігацію
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});