const menuIcon = document.querySelector("#menu");
menuIcon.addEventListener("click", changeMenuIcon);

let isFirstIcon = true;

function changeMenuIcon() {
  if (isFirstIcon) {
    menuIcon.src = "x.svg";
  } else {
    menuIcon.src = "menu.svg";
  }
  isFirstIcon = !isFirstIcon;
}
