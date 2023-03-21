const slide = document.querySelectorAll("[data-slide]");

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    760: {
      slidesPerView: 2,
    },
    980: {
      slidesPerView: 3,
    },
  },
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const alteracaoCarrossel = () => {
  var largura = window.screen.availWidth;

  if (largura > 760) {
    slide.forEach((elemento) => {
      elemento.addEventListener("mouseover", () => {
        console.log(elemento.childNodes);
        elemento.childNodes[5].classList.add("carrossel-divAcesso");
        elemento.childNodes[1].classList.add("carrossel-divTitulo");
        elemento.classList.remove("slide__fundo");
      });
    });

    slide.forEach((elemento) => {
      elemento.addEventListener("mouseleave", () => {
        elemento.childNodes[5].classList.remove("carrossel-divAcesso");
        elemento.childNodes[1].classList.remove("carrossel-divTitulo");
        elemento.classList.add("slide__fundo");
      });
    });
  }
};

alteracaoCarrossel();
