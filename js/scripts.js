const menuDiv = document.getElementById("menu-mobile");
const btnMenu = document.getElementById("btn-menu-mobile");
menuDiv.addEventListener("click", animationMenu);
function animationMenu() {
  menuDiv.classList.toggle("open");
  btnMenu.classList.toggle("active");
}