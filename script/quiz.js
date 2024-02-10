const navOpen = document.querySelector(".navOpen");
const navClose = document.querySelector(".navClose");
const navBar = document.querySelector(".navBar ul");
navClose.style.display = "none";
const openNav = () => {
    navBar.style.display = "block"
    navOpen.style.display = "none"
    navClose.style.display = "block";
}

const closeNav = () => {
    navBar.style.display = "none"
    navOpen.style.display = "block"
    navClose.style.display = "none";
}

navOpen.addEventListener("click",openNav);
navClose.addEventListener("click",closeNav);
navBar.addEventListener("click",function () {
    navBar.style.display = "none"
})

