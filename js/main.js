const menu = document.getElementById("cabecalho-menu");
const navMenu = document.getElementById("cabecalho-navID");
const cabecalho = document.getElementById("cabecalhoID");
const slide = document.querySelectorAll("[data-slide]");
const topo = document.getElementById("topo");
const menuItem = document.querySelectorAll("[data-menu]");

let verificadorMenu = 0;

menu.addEventListener("click", () => {
  if (verificadorMenu === 0) {
    navMenu.classList.add("menu__nav");
    menuItem.forEach((elemento) => {
      elemento.classList.add("menu__lista--item");
    });
    menu.src = "img/fechar.png";
    verificadorMenu = 1;
  } else {
    menuItem.forEach((elemento) => {
      elemento.classList.remove("menu__lista--item");
    });
    navMenu.classList.remove("menu__nav");
    menu.src = "img/menu.png";
    verificadorMenu = 0;
  }
});

const animarSroll = () => {
  const topoPagina = window.pageYOffset;
  if (topoPagina > 40) {
    cabecalho.classList.add("scroll__desce");
    cabecalho.classList.remove("scroll__sobe");
    topo.classList.add("link-topo-add");
  } else {
    cabecalho.classList.remove("scroll__desce");
    cabecalho.classList.add("scroll__sobe");
    topo.classList.remove("link-topo-add");
  }
};

window.addEventListener("scroll", () => {
  animarSroll();
});

const alteracaoCarrossel = () => {
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
};

alteracaoCarrossel();
