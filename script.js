document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const header = document.getElementById("siteHeader");
  const themeToggle = document.getElementById("themeToggle");
  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");
  const cursorGlow = document.getElementById("cursorGlow");
  const year = document.getElementById("year");

  year.textContent = new Date().getFullYear();

  // Theme
  const savedTheme = localStorage.getItem("saad-theme");
  if (savedTheme === "light") {
    body.classList.add("light");
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light");
    const light = body.classList.contains("light");
    localStorage.setItem("saad-theme", light ? "light" : "dark");
    themeToggle.innerHTML = light
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';
  });

  // Header
  const updateHeader = () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader);

  // Mobile nav
  menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });
  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => mobileNav.classList.remove("active"));
  });

  // Reveal on scroll
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  // Project filters
  const projectFilters = document.querySelectorAll(".project-filter");
  const projectCards = document.querySelectorAll("#projectsGrid .project-card");

  projectFilters.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      projectFilters.forEach(item => {
        const isActive = item === button;
        item.classList.toggle("active", isActive);
        item.setAttribute("aria-pressed", isActive ? "true" : "false");
      });

      projectCards.forEach(card => {
        const categories = (card.dataset.categories || "").split(/\s+/);
        const shouldShow = filter === "all" || categories.includes(filter);
        card.classList.toggle("is-filtered-out", !shouldShow);
      });
    });
  });

  // Cursor glow
  if (window.matchMedia("(pointer:fine)").matches) {
    document.addEventListener("mousemove", e => {
      cursorGlow.style.left = e.clientX + "px";
      cursorGlow.style.top = e.clientY + "px";
    });
  } else {
    cursorGlow.style.display = "none";
  }
});
