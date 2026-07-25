function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("open");
}

// Close menu on link click
document.querySelectorAll(".nav-links a").forEach(a => {
  a.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("open");
  });
});

// Smooth scroll active state
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(s => {
    const top = s.offsetTop - 100;
    if (window.scrollY >= top) current = s.getAttribute("id");
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute("href") === "#" + current ? "var(--accent)" : "";
  });
});

// Contact form
function handleSubmit(e) {
  e.preventDefault();
  const msg = document.getElementById("form-msg");
  msg.textContent = "تم إرسال رسالتك بنجاح! سأرد عليك قريباً.";
  e.target.reset();
  setTimeout(() => { msg.textContent = ""; }, 4000);
  return false;
}

// Fade-in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".about-card, .project-card").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.6s, transform 0.6s";
  observer.observe(el);
});