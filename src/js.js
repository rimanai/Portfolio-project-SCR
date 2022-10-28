let button = document.querySelector("#menu-button");
button.addEventListener("click", handleMenu);

function handleMenu() {
  let sidebar = document.querySelector("div#side-nav");
  sidebar.style.visibility = "hidden";
  //let fakesidebar = document.querySelector("#fake-side-nav");
  //fakesidebar.style.visibility = "hidden";
}

function reopenMenu() {
  let opensidebar = document.querySelector("#side-nav");
  opensidebar.style.visibility = "initial";
}

let reopen = document.querySelector("#reopen-button");
reopen.addEventListener("click", reopenMenu);
