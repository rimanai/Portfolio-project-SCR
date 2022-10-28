let button = document.querySelector("#menu-button");
button.addEventListener("click", handleMenu);

function handleMenu() {
  let sidebar = document.querySelector("div#side-nav");
  sidebar.style.visibility = "hidden";
}
