/* ---- Background Selector ---- */

var currentColor = document.querySelector("#currentColor");
var body = document.querySelector("#body");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");

function setBackgroundColor() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    currentColor.textContent = body.style.background + ";";
}

color1.addEventListener("input", setBackgroundColor);
color2.addEventListener("input", setBackgroundColor);