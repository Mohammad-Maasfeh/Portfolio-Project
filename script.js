// ==========================
// Smooth reveal on scroll
// ==========================

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".fade-in, .slide-up").forEach(el => {
  observer.observe(el);
});

// ==========================
// Active navbar link highlight
// ==========================
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ==========================
// Navbar background on scroll
// ==========================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});
// ==========================
// Animate skill bars on view
// ==========================
const skillSection = document.querySelector("#skills");
const skillBars = document.querySelectorAll(".fill");

const skillObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillBars.forEach(bar => {
          bar.style.width = bar.dataset.level;
        });
      }
    });
  },
  { threshold: 0.4 }
);

skillObserver.observe(skillSection);
