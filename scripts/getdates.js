document.getElementById("currentyear").innerHTML = new Date().getFullYear();

const lastModified = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = lastModified.toLocaleDateString();