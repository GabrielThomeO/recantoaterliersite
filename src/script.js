/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// --- i18n Dictionary ---
const translations = {
  pt: {
    nav_home: "Início",
    nav_about: "Quem Somos",
    nav_method: "Método",
    nav_products: "Produtos",
    nav_portfolio: "Portfólio",
    hero_subtitle: "ARQUITETURA COM ALMA",
    hero_text: "Criamos espaços que acolhem histórias e traduzem identidades através de um design contemporâneo e humano.",
    about_title: "QUEM SOMOS",
    about_text: "Um coletivo de arquitetos apaixonados por transformar sonhos em estruturas sólidas. Nossa essência reside no equilíbrio entre técnica e sensibilidade.",
    method_title: "NOSSO MÉTODO",
    method_text: "Acreditamos em um processo colaborativo. Da escuta ativa à entrega das chaves, cada etapa é desenhada para garantir que o resultado final seja um verdadeiro recanto.",
    prod_intro_title: "NOSSAS JORNADAS",
    prod_intro_text: "Conheça os caminhos que podemos trilhar juntos para realizar seu projeto.",
    prod_1_title: "BUSCA POR IMÓVEIS",
    prod_1_text: "Auxiliamos na escolha do terreno ou imóvel ideal, analisando potencial construtivo e viabilidade.",
    prod_2_title: "CONSTRUÇÕES",
    prod_2_text: "Projetos residenciais e comerciais do zero, com foco em eficiência e estética atemporal.",
    prod_3_title: "REFORMAS",
    prod_3_text: "Transformação de espaços existentes, otimizando fluxos e renovando a atmosfera.",
    prod_4_title: "INTERIORES",
    prod_4_text: "Soluções rápidas e pontuais para renovar ambientes sem grandes intervenções.",
    prod_5_title: "CONSTRUÇÕES MODULARES",
    prod_5_text: "Arquitetura modular e sustentável para quem busca agilidade e menor impacto ambiental.",
    footer_contact: "CONTATO",
    footer_social: "SOCIAL"
  },
  en: {
    nav_home: "Home",
    nav_about: "About Us",
    nav_method: "Method",
    nav_products: "Products",
    nav_portfolio: "Portfolio",
    hero_subtitle: "ARCHITECTURE WITH SOUL",
    hero_text: "We create spaces that welcome stories and translate identities through contemporary and human design.",
    about_title: "ABOUT US",
    about_text: "A collective of architects passionate about transforming dreams into solid structures. Our essence lies in the balance between technique and sensitivity.",
    method_title: "OUR METHOD",
    method_text: "We believe in a collaborative process. From active listening to handing over the keys, each step is designed to ensure the final result is a true sanctuary.",
    prod_intro_title: "OUR JOURNEYS",
    prod_intro_text: "Discover the paths we can take together to realize your project.",
    prod_1_title: "PROPERTY SEARCH",
    prod_1_text: "We assist in choosing the ideal plot or property, analyzing construction potential and feasibility.",
    prod_2_title: "CONSTRUCTIONS",
    prod_2_text: "Residential and commercial projects from scratch, focusing on efficiency and timeless aesthetics.",
    prod_3_title: "RENOVATIONS",
    prod_3_text: "Transformation of existing spaces, optimizing flows and renewing the atmosphere.",
    prod_4_title: "INTERIORS",
    prod_4_text: "Quick and specific solutions to renew environments without major interventions.",
    prod_5_title: "MODULAR CONSTRUCTIONS",
    prod_5_text: "Modular and sustainable architecture for those seeking agility and lower environmental impact.",
    footer_contact: "CONTACT",
    footer_social: "SOCIAL"
  }
};

let currentLang = 'pt';

function toggleLanguage() {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  const btn = document.getElementById('lang-toggle');
  
  /* Apenas altera a classe para a animação do CSS, preservando os spans internos */
  btn.classList.toggle('lang-pt-active');
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });
}

document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);

// --- Dual Carousel Logic ---
const textCarousel = document.getElementById('text-carousel');
const imageCarousel = document.getElementById('image-carousel');
const dotsContainer = document.getElementById('slider-dots');
const slidesCount = 6;
let currentSlide = 0;
let autoScrollInterval;

function createDots() {
  for (let i = 0; i < slidesCount; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      goToSlide(i);
      resetAutoScroll();
    });
    dotsContainer.appendChild(dot);
  }
}

function goToSlide(index) {
  currentSlide = index;
  const offset = index * -100;
  textCarousel.style.transform = `translateX(${offset}%)`;
  imageCarousel.style.transform = `translateX(${offset}%)`;
  
  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slidesCount;
  goToSlide(currentSlide);
}

function resetAutoScroll() {
  clearInterval(autoScrollInterval);
  autoScrollInterval = setInterval(nextSlide, 8000);
}

// --- Infinite Review Track ---
const track = document.getElementById('reviews-track');
let scrollPos = 0;

function animateReviews() {
  scrollPos -= 0.5; // Speed
  if (Math.abs(scrollPos) >= track.firstElementChild.offsetWidth + 64) { // 64 is gap
    const first = track.firstElementChild;
    track.appendChild(first);
    scrollPos = 0;
  }
  track.style.transform = `translateX(${scrollPos}px)`;
  requestAnimationFrame(animateReviews);
}

// --- Reveal Observer ---
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 });

// --- Mobile Navbar Auto-Scroll (Infinite Loop) ---
function initMobileNavScroll() {
  const navLinks = document.querySelector('.navbar__links');
  if (!navLinks) return;

  // Clone content for infinite loop and add specific class to clones
  const originalLinks = Array.from(navLinks.children);
  originalLinks.forEach(link => {
    const clone = link.cloneNode(true);
    clone.classList.add('nav-clone');
    navLinks.appendChild(clone);
  });

  let isScrolling = true;
  let currentScrollPos = 0; // Maintain float state for sub-pixel precision
  const scrollSpeed = 0.3; // Flawless slow speed

  function autoScroll() {
    if (!isScrolling || window.innerWidth > 768) {
      requestAnimationFrame(autoScroll);
      return;
    }

    currentScrollPos += scrollSpeed;
    navLinks.scrollLeft = currentScrollPos;

    // Reset when reaching the half-way point (end of original content)
    if (currentScrollPos >= navLinks.scrollWidth / 2) {
      currentScrollPos = 0;
      navLinks.scrollLeft = 0;
    }

    requestAnimationFrame(autoScroll);
  }

  // Sync float state with manual scroll
  const syncScroll = () => {
    currentScrollPos = navLinks.scrollLeft;
  };

  // Pause on interaction
  navLinks.addEventListener('touchstart', () => {
    isScrolling = false;
    syncScroll();
  });
  navLinks.addEventListener('touchend', () => {
    syncScroll();
    // Brief delay before resuming
    setTimeout(() => isScrolling = true, 1500);
  });
  navLinks.addEventListener('mousedown', () => {
    isScrolling = false;
    syncScroll();
  });
  navLinks.addEventListener('mouseup', () => {
    syncScroll();
    isScrolling = true;
  });
  navLinks.addEventListener('mouseenter', () => isScrolling = false);
  navLinks.addEventListener('mouseleave', () => {
    syncScroll();
    isScrolling = true;
  });

  autoScroll();
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  createDots();
  resetAutoScroll();
  animateReviews();
  initMobileNavScroll();
  
  // Apply reveal class to sections
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.add('reveal');
    revealObserver.observe(sec);
  });

  // Mobile Swipe Support (Simple)
  let touchStartX = 0;
  const handleSwipe = (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
      nextSlide();
      resetAutoScroll();
    } else if (touchEndX - touchStartX > 50) {
      currentSlide = (currentSlide - 1 + slidesCount) % slidesCount;
      goToSlide(currentSlide);
      resetAutoScroll();
    }
  };

  textCarousel.addEventListener('touchstart', e => touchStartX = e.touches[0].screenX);
  textCarousel.addEventListener('touchend', handleSwipe);
  imageCarousel.addEventListener('touchstart', e => touchStartX = e.touches[0].screenX);
  imageCarousel.addEventListener('touchend', handleSwipe);
});

// --- Link dinâmico do WhatsApp nas imagens do Carrossel ---
document.addEventListener('DOMContentLoaded', () => {
  const productImages = document.querySelectorAll('#image-carousel .slide img');
  const productTitles = document.querySelectorAll('#text-carousel .slide h2');
  const zapNumber = '5512996462826'; // Número com DDI do Brasil

  productImages.forEach((img, index) => {
    // Altera o cursor para a "mãozinha" indicando que é clicável (sem mexer no CSS)
    img.style.cursor = 'pointer'; 
    
    img.addEventListener('click', () => {
      // Lê o texto do H2 correspondente no exato momento do clique
      // Isso garante que se o idioma for trocado, a mensagem puxa o nome traduzido
      const currentProductName = productTitles[index].textContent.trim();
      
      // Monta a mensagem e codifica para o formato de URL (substituindo espaços por %20, etc)
      const msg = `Olá! Gostaria de saber mais sobre: ${currentProductName}`;
      const url = `https://wa.me/${zapNumber}?text=${encodeURIComponent(msg)}`;
      
      // Abre o WhatsApp em uma nova aba
      window.open(url, '_blank');
    });
  });
});
