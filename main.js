var css = document.querySelector("h3");
var colorOne = document.querySelector(".color1");
var colorTwo = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
    body.style.background = "linear-gradient(to right," +
        colorOne.value + ", " + colorTwo.value + ")"; 

    css.textContent = body.style.background + ";";
}
colorOne.addEventListener("input", setGradient);

colorTwo.addEventListener("input", setGradient);

