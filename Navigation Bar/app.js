

//contains - cheks classList for specific class
//add - add class
// remove - remove class
//toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
    // getting all  the classes in the links class

    //Method-1
    // if (links.classList.contains('nav-links')) {
    //     links.classList.remove("nav-links");
    // }
    // else {
    //     links.classList.add("nav-links");
    // }

    //Method-2 
    //using the toggle method
    links.classList.toggle("nav-links");


})

