const add = document.getElementById("add");
const sub = document.getElementById("sub");
const reset = document.getElementById("reset");
const value = document.querySelector("#value");
let count = 0;

add.addEventListener("click", () => {
    count++;
    value.textContent = count;
    value.style.color = "Green";
})

sub.addEventListener("click", () => {
    count--;
    value.textContent = count;
    value.style.color = "Red";
})

reset.addEventListener("click", () => {
    count = 0;
    value.textContent = count;
    value.style.color = "White";
})