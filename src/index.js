import { createPage } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";
import "./style.css";

createPage();

function clearPage() {
  let content = document.getElementById("content");
  content.innerHTML = ``;
}

function buttonEvents() {
  let menuButton = document.getElementById("menu-button");
  menuButton.addEventListener("click", (e) => {
    clearPage();
    loadMenu();
  });

  let homeButton = document.getElementById("home-button");
  homeButton.addEventListener("click", (e) => {
    clearPage();
    createPage();
  });

  let aboutButton = document.getElementById("about-button");
  aboutButton.addEventListener("click", (e) => {
    clearPage();
    loadAbout();
  });
}

buttonEvents();
