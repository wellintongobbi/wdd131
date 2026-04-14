document.addEventListener("DOMContentLoaded", function() {
console.log("rodando");
  /* =======================
     SLIDER
  ======================== */
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  function nextSlide() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }

  if (slides.length > 0) {
    setInterval(nextSlide, 4000);
  }

  /* =======================
     ANIMAÇÃO SOBRE
  ======================== */
  const sobreBox = document.querySelector(".sobre-box");

  if (sobreBox) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    observer.observe(sobreBox);
  }

  /* =======================
     HEADER SHRINK
  ======================== */
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
  });

  /* =======================
     MENU HAMBURGUER
  ======================== */
  const toggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  if (toggle && navMenu) {
    toggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  /* =======================
     SMOOTH SCROLL TOP 
  ======================== */
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");

      if (targetId === "#" || targetId === "") return;

      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();

        const header = document.querySelector("header");
        const headerHeight = header.offsetHeight;

        const targetPosition = target.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });

        // fecha menu mobile
        const navMenu = document.querySelector("nav ul");
        if (navMenu.classList.contains("active")) {
          navMenu.classList.remove("active");
        }
      }
    });
  });

  /* =======================
   SMOOTH SCROLL GLOBAL 
  ======================= */
  const lenis = new Lenis({
    lerp: 0.1, // mais suave
    wheelMultiplier: 0.8, // scroll mais controlado
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

});

document.addEventListener("DOMContentLoaded", function() {

  // ... SEU CÓDIGO EXISTENTE ...

  /* =======================
     PORTFOLIO SLIDER 
  ======================= */

  const slider = document.getElementById("portfolio-slider");
  const track = document.getElementById("slider-track");
  const items = document.querySelectorAll(".portfolio-item");
  const closeBtn = document.querySelector(".close-slider");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  let currentIndex = 0;
  let autoSlide;

const imagens = {
  porta: [
    "images/porta.jpeg",
    "images/porta2.jpeg",
    "images/porta3.jpeg",
    "images/porta4.jpeg",
    "images/porta5.jpg",
    "images/porta6.jpeg",
    "images/porta7.jpeg",
    "images/porta8.jpeg"
  ],

  janela: [
    "images/janela.jpg",
    "images/janela2.jpg",
    "images/janela3.jpg",
    "images/janela4.jpg",

  ],

  instalacao: [
    "images/inside.jpg",
    "images/inside2.jpeg",
    "images/inside3.jpeg",
    "images/inside4.jpeg",
    "images/inside5.jpeg"
  ],

  box: [
    "images/box.jpeg",
    "images/box2.jpeg",
    "images/box3.jpg",
    "images/box4.jpg",
    "images/box5.jpg"
  ],
   mozart: [
    "images/mozart.jpeg",
    "images/mozart2.jpeg"
  ],
  amadeus: [
    "images/amadeus.jpeg",
    "images/amadeus2.jpeg",
    "images/amadeus3.jpeg",
    "images/amadeus4.jpeg",
    "images/amadeus5.jpeg",
    "images/amadeus6.jpeg"
  ],
  obras: [
    "images/obras.jpeg",
    "images/obras2.jpeg",
    "images/obras3.jpeg",
    "images/obras4.jpeg",
    "images/obras5.jpeg",
    "images/obras6.jpeg"
  ]
};

  function updateSlider() {
  const images = track.querySelectorAll("img");

  images.forEach(img => img.classList.remove("active"));

  if (images[currentIndex]) {
    images[currentIndex].classList.add("active");
  }
}

  function startAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
      const total = track.children.length;
      currentIndex = (currentIndex + 1) % total;
      updateSlider();
    }, 3000);
  }

  items.forEach(item => {
    item.addEventListener("click", () => {
      const categoria = item.dataset.category;

      track.innerHTML = "";
      currentIndex = 0;

      imagens[categoria].forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        track.appendChild(img);
      });

      slider.classList.remove("hidden");
      slider.scrollIntoView({ behavior: "smooth" });

      updateSlider();
      startAutoSlide();
    });
  });

  nextBtn.addEventListener("click", () => {
    const total = track.children.length;
    currentIndex = (currentIndex + 1) % total;
    updateSlider();
  });

  prevBtn.addEventListener("click", () => {
    const total = track.children.length;
    currentIndex = (currentIndex - 1 + total) % total;
    updateSlider();
  });

  closeBtn.addEventListener("click", () => {
    slider.classList.add("hidden");
    clearInterval(autoSlide);
  });



/* =======================
   ABRIR SLIDER AUTOMÁTICO
======================= */

const params = new URLSearchParams(window.location.search);
const categoriaURL = params.get("categoria");

if (categoriaURL && imagens[categoriaURL]) {

  track.innerHTML = "";
  currentIndex = 0;

  imagens[categoriaURL].forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    track.appendChild(img);
  });

  slider.classList.remove("hidden");

  updateSlider();
  startAutoSlide();

  setTimeout(() => {
    slider.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 200);
}
});