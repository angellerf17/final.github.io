function toggleTheme() {
  document.body.classList.toggle("dark");
  const on = document.body.classList.contains("dark");
  localStorage.setItem("themeDark", on ? "1" : "0");
  const label = document.getElementById("themeLabel");
  if (label) label.textContent = on ? "Dark" : "Light";
}

(function initTheme(){
  const saved = localStorage.getItem("themeDark");
  if (saved === "1") document.body.classList.add("dark");
})();

(function injectDarkThemeCSS(){
  const style = document.createElement("style");
  style.textContent = `
    body.dark{
      background: linear-gradient(180deg, #120713, #0b0610);
      color: rgba(255,255,255,.92);
    }
    body.dark p{ color: rgba(255,255,255,.80); }
    body.dark header{ background: rgba(12,6,16,.75); }
    body.dark nav a{ color: rgba(255,255,255,.92); }
    body.dark .card{ background: rgba(255,255,255,.06); border-color: rgba(255,255,255,.10); }
    body.dark table{ border-color: rgba(255,255,255,.18); }
    body.dark th{ background: rgba(194,24,91,.18); }
    body.dark tr:hover{ background: rgba(255,255,255,.04); }
  `;
  document.head.appendChild(style);
})();

function setupGalleryFilter(){
  const pills = document.querySelectorAll("[data-filter]");
  const items = document.querySelectorAll("[data-type]");
  if (!pills.length || !items.length) return;

  pills.forEach(btn => {
    btn.addEventListener("click", () => {
      pills.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      items.forEach(card => {
        const type = card.getAttribute("data-type");
        card.style.display = (filter === "all" || type === filter) ? "block" : "none";
      });
    });
  });
}

function setupContactForm(){
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const msg = document.getElementById("formMsg");
    if (msg) {
      msg.style.display = "block";
      msg.textContent = "Thanks! Your message was submitted!";
      setTimeout(()=> msg.style.display = "none", 3500);
    }
    form.reset();
  });
}

window.addEventListener("DOMContentLoaded", () => {
  setupGalleryFilter();
  setupContactForm();
});