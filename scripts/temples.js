const year = document.querySelector("#currentyear");
const today = new Date();

year.textContent = today.getFullYear();

const lastModified = document.querySelector("#lastModified");

lastModified.textContent = `Last Modified: ${document.lastModified}`;

const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }
});