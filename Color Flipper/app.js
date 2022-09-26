const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "aqua", "orchid", "gray", "silver", "maroon", "red", "purple", "fushsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");


btn.addEventListener("click", () => {
    const random = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[random];
    document.body.style.transitionDuration = "0.5s";

    color.textContent = colors[random];
    color.style.color = colors[random];


});