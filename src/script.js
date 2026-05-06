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
    hero_text: "Constituir um lar não precisa ser um ralo de tempo e dinheiro. Nosso método descomplica a arquitetura com encontros focados, diretos e 100% transparentes. Em até 15 dias, entregamos o seu projeto completo junto com uma Caixa de Ferramentas: o conhecimento prático que você precisa para tornar a execução do seu lar muito mais simples e segura.",
    about_title: "QUEM SOMOS",
    about_text: "Formado pela UFMG, o arquiteto e urbanista Gabriel Thomé acredita que a arquitetura deve ensinar e libertar. Por entender que os espaços são vivos e mudam com o tempo, ele criou um método que não apenas entrega um projeto bonito, mas também transfere conhecimento para o cliente. Acompanhado de uma equipe de arquitetos, o objetivo é simples: dar a você a autonomia necessária para cuidar do seu espaço, unindo a beleza sensível da arquitetura à liberdade do dia a dia.",
    method_title: "NOSSO MÉTODO",
    method_text: "A partir de 15 dias, desenvolvemos o seu projeto completo enquanto você aprende o essencial sobre o seu próprio espaço. Falamos de forma clara sobre medições, cores, móveis, acabamentos, estruturas e até contratos. É uma preparação real para que você nunca mais seja refém de incertezas na hora de construir ou reformar. Desenhamos o seu espaço juntos, e você ganha a confiança necessária para tomar as melhores decisões.",
    prod_intro_title: "NOSSAS JORNADAS",
    prod_intro_text: "Percebeu que planejar o seu espaço ganhando autonomia e clareza é exatamente o que você precisa para ter liberdade de verdade? Agora só falta escolher: Qual é a sua jornada?",
    prod_1_title: "BUSCA POR IMÓVEIS",
    prod_1_text: "Consultoria técnica de imóveis para você que está procurando um lar ou está em busca de vender um imóvel. Descubra o real potencial (e os possíveis desafios) do espaço antes de fechar negócio. Entre em contato para começar sua mudança.",
    prod_2_title: "CONSTRUÇÕES",
    prod_2_text: "Projeto completo para obras do zero. Do estudo do terreno até o planejamento técnico e financeiro detalhado da execução. A solução definitiva para você construir com segurança, previsibilidade e sem sustos. Entre em contato para construir um lar genuíno.",
    prod_3_title: "REFORMAS",
    prod_3_text: "Projeto para transformar seus ambientes atuais com controle total de orçamento. Praticidade e eficiência para a sua obra, enquanto você aprende o essencial da arquitetura para aplicar na sua casa. Entre em contato para saber mais.",
    prod_4_title: "INTERIORES",
    prod_4_text: "Aplique todo o processo de projeto e aprendizado de forma simples e focalizada em honestidade dos materiais e fluidez espacial. O produto ideal para você que quer começar transformando seu lar. Entre em contato para entender melhor.",
    prod_5_title: "CONSTRUÇÕES MODULARES",
    prod_5_text: "Analise com as principais construtoras de pré-fabricados do mercado enquanto desenvolvemos juntos um projeto do seu jeito. Casa com cara de casa, sem canteiro de obras. Entre em contato para saber mais.",
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
    hero_text: "Building a home doesn't have to be a drain on your time and money. Our method simplifies architecture with focused, direct, and 100% transparent meetings. In up to 15 days, we deliver your complete project along with a Toolbox: the practical knowledge you need to make the execution of your home much simpler and safer.",
    about_title: "ABOUT US",
    about_text: "Graduated from UFMG, architect and urban planner Gabriel Thomé believes that architecture should teach and liberate. Understanding that spaces are alive and change over time, he created a method that not only delivers a beautiful project but also transfers knowledge to the client. Alongside a team of architects, the goal is simple: to give you the autonomy necessary to care for your space, uniting the sensitive beauty of architecture with the freedom of everyday life.",
    method_title: "OUR METHOD",
    method_text: "In as little as 15 days, we develop your complete project while you learn the essentials about your own space. We speak clearly about measurements, colors, furniture, finishes, structures, and even contracts. It's real preparation so you'll never be hostage to uncertainties when building or renovating. We design your space together, and you gain the necessary confidence to make the best decisions.",
    prod_intro_title: "OUR JOURNEYS",
    prod_intro_text: "Have you realized that planning your space while gaining autonomy and clarity is exactly what you need for true freedom? Now you just need to choose: What is your journey?",
    prod_1_title: "PROPERTY SEARCH",
    prod_1_text: "Technical real estate consultancy for those looking for a home or seeking to sell a property. Discover the real potential (and possible challenges) of the space before closing the deal. Contact us to start your change.",
    prod_2_title: "CONSTRUCTIONS",
    prod_2_text: "Complete project for building from scratch. From the site study to the detailed technical and financial planning of the execution. The definitive solution for you to build with safety, predictability, and no surprises. Contact us to build a genuine home.",
    prod_3_title: "RENOVATIONS",
    prod_3_text: "Project to transform your current environments with total budget control. Practicality and efficiency for your work, while you learn the essentials of architecture to apply in your home. Contact us to learn more.",
    prod_4_title: "INTERIORS",
    prod_4_text: "Apply the entire design and learning process in a simple way, focused on the honesty of materials and spatial fluidity. The ideal product for those who want to start transforming their home. Contact us to understand better.",
    prod_5_title: "MODULAR CONSTRUCTIONS",
    prod_5_text: "Analyze with the main prefab builders in the market while we develop a project your way together. A house that looks like a house, without a construction site. Contact us to learn more.",
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
