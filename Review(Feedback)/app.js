const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "web developer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "Anna Johnson",
        job: "web designer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "Peter Jones",
        job: "intern",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "Bill Anderson",
        job: "the boss",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
    {
        id: 4,
        name: "Tom",
        job: "Pet",
        img: "https://i.pinimg.com/736x/aa/2e/f0/aa2ef0ac37db19de28da92aa1b297ca6.jpg",
        text: "I am Tom I stay here and catch mouse, that is jerry"
    },
    {
        id: 5,
        name: "Jerry",
        job: "Tom's friend",
        img: "https://comicvine.gamespot.com/a/uploads/scale_small/1/12483/277673-175026-jerry.jpg",
        text: "I eat cheeze and live here with tom"
    }
];

// select items

const img = document.getElementById("img");
const author = document.getElementById("name");
const job = document.getElementById("job");
const info = document.getElementById("comment");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const surpriceBtn = document.querySelector(".random-btn");


//set starting items 
let currentItem = 0;


//load initial item
window.addEventListener('DOMContentLoaded', () => {
    showPerson(currentItem);
})

function showPerson(person) {
    const item = reviews[person]
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;

}

//Show next person

nextBtn.addEventListener("click", () => {
    currentItem++;

    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);

})

prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})

surpriceBtn.addEventListener("click", () => {
    currentItem = Math.floor(Math.random() * (reviews.length - 1));
    showPerson(currentItem);

})




