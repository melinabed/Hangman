const menuIcon = document.querySelector("#menu");
menuIcon.addEventListener("click", changeMenuIcon);

let isFirstIcon = true;

const sidebar = document.querySelector(".sidebar");
const categoryPick = document.querySelector("#category");

pickCategory();

const testButton = document.querySelector("#test");
testButton.addEventListener("click", playGame);

function changeMenuIcon() {
  if (isFirstIcon) {
    menuIcon.src = "/menuSVGs/x.svg";
    sidebar.style.display = "flex";
  } else {
    menuIcon.src = "/menuSVGs/menu.svg";
    sidebar.style.display = "none";
  }
  isFirstIcon = !isFirstIcon;
}

function pickCategory() {
  let picks = document.querySelectorAll("#pick");

  picks.forEach((pick) => {
    pick.addEventListener("click", () => {
      categoryPick.innerHTML = pick.innerHTML;
    });
  });
}

function playGame() {
  const hangMan = document.querySelector("#hangman");

  if (hangMan.src.match("hangmanSVGs/phase0.svg")) {
    hangMan.src = "hangmanSVGs/phase1.svg";
  } else if (hangMan.src.match("hangmanSVGs/phase1.svg")) {
    hangMan.src = "hangmanSVGs/phase2.svg";
  } else if (hangMan.src.match("hangmanSVGs/phase2.svg")) {
    hangMan.src = "hangmanSVGs/phase3.svg";
  } else if (hangMan.src.match("hangmanSVGs/phase3.svg")) {
    hangMan.src = "hangmanSVGs/phase4.svg";
  } else if (hangMan.src.match("hangmanSVGs/phase4.svg")) {
    hangMan.src = "hangmanSVGs/phase5.svg";
  } else if (hangMan.src.match("hangmanSVGs/phase5.svg")) {
    hangMan.src = "hangmanSVGs/phase6.svg";
  }
}
