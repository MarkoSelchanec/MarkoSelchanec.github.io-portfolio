const dropDownMedia = document.getElementsByClassName("nav-media")[0];
const navMedia = document.getElementsByClassName("nav-outer-media")[0];
const nav = document.getElementsByClassName("navbar")[0];
const navDrop = document.getElementsByClassName("navbar-dropdown")[0];

const meAvatar = document.getElementsByClassName("content-avatar")[0];
const meAvatarLink = document.getElementById("content-avatar");
const burBar = document.getElementsByClassName("nav-burger")[0];
const contentBtns = [...document.getElementsByClassName("content-button")];
const contentPages = [...document.getElementsByClassName("content-container")];
const projectsBtns= [...document.getElementsByClassName("btn-projects")];
const skillsBtns = [...document.getElementsByClassName("btn-skills")];
const contactBtns = [...document.getElementsByClassName("btn-contact")];


// Resize nav

const windowSizeElements = () => {
    if(window.innerWidth <= 600) {
        dropDownMedia.classList.remove("hide");
        navMedia.classList.add("hide");
        burBar.classList.remove("hide");
        nav.classList.add("hide");
        nav.classList.remove("apply-flex");
        navDrop.classList.remove("hide");
        navDrop.classList.add("apply-flex");
        navDrop.classList.remove("show");
    }
    if(window.innerWidth > 600) {
        dropDownMedia.classList.add("hide");
        navMedia.classList.remove("hide");
        burBar.classList.add("hide");
        nav.classList.remove("hide");
        nav.classList.add("apply-flex");
        navDrop.classList.add("hide");
        navDrop.classList.remove("apply-flex");
    } 
}

(function() {
    windowSizeElements();
})();

window.addEventListener("resize", windowSizeElements)

// Burger-bar

burBar.addEventListener("click", (e) => {
    navDrop.classList.toggle("show");
    e.preventDefault();
})

meAvatarLink.addEventListener("mouseenter", () => {
    meAvatar.setAttribute("src", "images/me22.png")
})
meAvatarLink.addEventListener("mouseleave", () => {
    meAvatar.setAttribute("src", "images/me2.png")
})

// Content-btns

const showPage = (iOne, iTwo, iThree) => {
    contentPages[iOne].classList.remove("hide");
    contentPages[iTwo].classList.add("hide");
    contentPages[iThree].classList.add("hide"); 
}

contentBtns[0].addEventListener("click", () => showPage(0, 1, 2));
projectsBtns.forEach(e => e.addEventListener("click", () => showPage(0, 1, 2)));


contentBtns[1].addEventListener("click", () => showPage(1, 0, 2));
skillsBtns.forEach(e => e.addEventListener("click", () => showPage(1, 0, 2)));

contentBtns[2].addEventListener("click", () => showPage(2, 1, 0));
contactBtns.forEach(e => e.addEventListener("click", () => showPage(2, 1, 0)));