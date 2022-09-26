const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const col = document.querySelector(".color");

btn.addEventListener("click", () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        let rand = Math.floor(Math.random() * hex.length);
        hexColor = hexColor + rand;
    }

    col.textContent = hexColor;
    col.style.color = hexColor;

    document.body.style.backgroundColor = hexColor;
})
