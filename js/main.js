const menu = document.getElementById("cabecalho-menu");
const navMenu = document.getElementById("cabecalho-navID");
const cabecalho = document.getElementById("cabecalhoID");
const slide = document.querySelectorAll("[data-slide]");

let verificadorMenu = 0;

menu.addEventListener("click", () => {
  if (verificadorMenu === 0) {
    navMenu.style.opacity = "1";
    navMenu.style.transition = ".5s";
    menu.src = "img/fechar.png";
    verificadorMenu = 1;
  } else {
    navMenu.style.opacity = "0";
    menu.src = "img/menu.png";
    verificadorMenu = 0;
  }
});

const animarSroll = () => {
  const windowTop = window.pageYOffset;
  if (windowTop > 40) {
    cabecalho.style.backgroundColor = "#141414";
    cabecalho.style.transition = ".5s";
  } else {
    cabecalho.style.backgroundColor = "transparent";
    cabecalho.style.opacity = "0.9";
  }
};

window.addEventListener("scroll", () => {
  animarSroll();
});

const alteracaoCarrossel = () => {
  slide.forEach((elemento) => {
    console.log(elemento);
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
};

alteracaoCarrossel();
