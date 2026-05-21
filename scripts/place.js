const year = document.querySelector("#currentyear");
const today = new Date();

year.textContent = today.getFullYear();

// Last Modified
document.getElementById("lastModified").textContent =
    document.lastModified;
