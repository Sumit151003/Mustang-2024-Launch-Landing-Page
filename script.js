// Swipe using button Functionality------->

let arr = ["assets/vehicle.avif", "assets/vehicle (1).avif", "assets/vehicle (2).avif", "assets/vehicle (3).avif", "assets/vehicle (4).avif", "assets/vehicle (5).avif", "assets/vehicle (6).avif"];
let length = arr.length;
let idx = 0;
let image = document.querySelector(".header-image");
image.src = arr[idx];

let leftBtn = document.getElementById("left-btn");
let rightBtn = document.getElementById("right-btn");

leftBtn.addEventListener('click', () => {
    if (idx != 0) {
        idx--;
        image.src = arr[idx];
    }
    else {
        idx = length - 1;
        image.src = arr[idx];
    }
});

rightBtn.addEventListener('click', () => {
    if (idx != length - 1) {
        idx++;
        image.src = arr[idx];
    }
    else {
        idx = 0;
        image.src = arr[idx];
    }
});


// Navbar button functionality

let nav = document.querySelector('nav');
let showNav = document.getElementById('show');
let hideNav = document.getElementById('hide');

showNav.addEventListener("click", ()=>{
    nav.style.right = "0%";
    showNav.style.visibility = "hidden";
});

hideNav.addEventListener("click", ()=>{
    nav.style.right = "-45%";
    showNav.style.visibility = "visible";
});