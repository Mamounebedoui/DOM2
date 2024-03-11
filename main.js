
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM content loaded");

});



let container = document.getElementsByClassName("container")
let ColorBox = document.getElementsByClassName("change-color-btn") 
console.log(ColorBox)
let changeColor = document.getElementById("color-box");


function getRandomColor() {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
   
    return `rgb(${r}, ${g}, ${b})`;
}


changeColor.addEventListener("click", () => {
    
    const randomColor = getRandomColor();
    changeColor.style.backgroundColor = randomColor;
});
