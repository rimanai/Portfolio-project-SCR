let burger = document.querySelector("#burger");
burger.style.visibility = "hidden";

let arrow = document.querySelector("#arrow");
arrow.addEventListener("click", closeMenu);

function closeMenu() {
  let closesidebar = document.querySelector("#side-nav");
  closesidebar.style.visibility = "hidden";
  burger.style.visibility = "visible";
  arrow.style.visibility = "hidden";
}

burger.addEventListener("click", openMenu);

function openMenu() {
  let sidebar = document.querySelector("div#side-nav");
  sidebar.style.visibility = "initial";
  let arrow = document.querySelector("#arrow");
  arrow.style.visibility = "visible";
  burger.style.visibility = "hidden";
}
