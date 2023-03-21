const menu = document.getElementById("cabecalho-menu");
const navMenu = document.getElementById("cabecalho-navID");
const cabecalho = document.getElementById("cabecalhoID");
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
