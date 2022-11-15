let burger = document.querySelector("#burger");
burger.style.opacity = "0.1";

let arrow = document.querySelector("#arrow");
arrow.addEventListener("click", closeMenu);

function closeMenu() {
  let closesidebar = document.querySelector("#side-nav");
  closesidebar.style.visibility = "hidden";

  burger.style.opacity = "1";
  burger.style.visibility = "visible";
  arrow.style.opacity = "0.1";
}

burger.addEventListener("click", openMenu);

function openMenu() {
  let sidebar = document.querySelector("div#side-nav");
  sidebar.style.visibility = "initial";
  let arrow = document.querySelector("#arrow");
  arrow.style.opacity = "1";
  burger.style.opacity = "0.1";
}

let mytime = document.querySelector("#mytime");
let date = new Date();

let hours = date.getHours().toLocaleString("en-US", {
  timeZone: "Australia/Melbourne",
});

let minutes = date.getMinutes().toLocaleString("en-US", {
  timeZone: "Australia/Melbourne",
});

if (minutes < 10) {
  minutes = `0${minutes}`;
}

if (mytime != null) {
  mytime.innerHTML = `<b>${hours}:${minutes}</b>`;
}
