// Scroll-triggered fade-in animations
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(
    ".section-title, .about-text, .skills, .project-card, .contact-text, .btn, .social-links"
  );

  targets.forEach((el) => el.classList.add("fade-in"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => observer.observe(el));

  // Shrink nav on scroll
  const nav = document.querySelector(".nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 50);
  });
});
