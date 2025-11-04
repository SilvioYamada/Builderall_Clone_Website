const menuDiv = document.getElementById("menu-mobile");
const btnMenu = document.getElementById("btn-menu-mobile");
menuDiv.addEventListener("click", animationMenu);
function animationMenu() {
  menuDiv.classList.toggle("open");
  btnMenu.classList.toggle("active");
}
const video = document.getElementById("video");
video.addEventListener("mouseout", () => {
  video.removeAttribute("controls", "controls");
});