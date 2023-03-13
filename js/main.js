const menu = document.getElementById("cabecalho-menu");
const navMenu = document.getElementById("cabecalho-navID");
const cabecalho = document.getElementById("cabecalhoID");
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
  } else {
    cabecalho.style.backgroundColor = "transparent";
  }
};

window.addEventListener("scroll", () => {
  animarSroll();
});
