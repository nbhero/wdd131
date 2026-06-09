// Increment review counter
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
reviewCount++;
localStorage.setItem("reviewCount", reviewCount);

// Display review count
document.getElementById("reviewCount").textContent = reviewCount;

// Get URL parameters
const params = new URLSearchParams(window.location.search);

// Display submitted values
document.getElementById("product").textContent =
    params.get("productName");

document.getElementById("rating").textContent =
    params.get("rating");

document.getElementById("installDate").textContent =
    params.get("installDate");

document.getElementById("userName").textContent =
    params.get("userName") || "Anonymous";

// Footer information
document.getElementById("currentyear").textContent =
    new Date().getFullYear();

document.getElementById("lastModified").textContent =
    document.lastModified;