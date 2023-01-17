let cat_imgs = [
    "https://i.imgur.com/swRJQiv.jpg",
    "https://i.imgur.com/XFm8tnY.jpg",
    "https://i.imgur.com/g5euvXF.jpg"
];

document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("cat_button");

    button.addEventListener("click", () => {
        let img = document.getElementById("cat_img");
        img.src = cat_imgs[Math.floor(Math.random()*cat_imgs.length)];
    });
});