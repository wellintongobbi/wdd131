const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");

year.textContent = today.getFullYear();

lastModified.textContent = "Last Modified: " + document.lastModified;
menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});