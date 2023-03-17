const menu = document.getElementById("cabecalho-menu");
const navMenu = document.getElementById("cabecalho-navID");
const cabecalho = document.getElementById("cabecalhoID");
const slide = document.querySelectorAll("[data-slide]");
const topo = document.getElementById("topo");

let verificadorMenu = 0;

menu.addEventListener("click", () => {
  if (verificadorMenu === 0) {
    navMenu.style.display = "flex";
    menu.src = "img/fechar.png";
    verificadorMenu = 1;
  } else {
    navMenu.style.display = "none";
    menu.src = "img/menu.png";
    verificadorMenu = 0;
  }
});

const animarSroll = () => {
  const windowTop = window.pageYOffset;
  if (windowTop > 40) {
    cabecalho.style.backgroundColor = "#141414";
    cabecalho.style.transition = ".5s";
    topo.style.opacity = "1";
  } else {
    cabecalho.style.backgroundColor = "transparent";
    cabecalho.style.opacity = "0.9";
    topo.style.opacity = "0";
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
