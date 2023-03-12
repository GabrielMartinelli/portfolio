const menu = document.getElementById("cabecalho-menu");
const navMenu = document.getElementById("cabecalho-navID");
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
