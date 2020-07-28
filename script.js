const dropDownMedia = document.getElementsByClassName("nav-media")[0];
const navMedia = document.getElementsByClassName("nav-outer-media")[0];
const nav = document.getElementsByClassName("navbar")[0];
const navDrop = document.getElementsByClassName("navbar-dropdown")[0];

const meAvatar = document.getElementsByClassName("content-avatar")[0];
const meAvatarLink = document.getElementById("content-avatar");
const burBar = document.getElementsByClassName("nav-burger")[0];
const contentBtns = [...document.getElementsByClassName("content-button")];
const contentPages = [...document.getElementsByClassName("content-container")];

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

burBar.addEventListener("click", () => {
    navDrop.classList.toggle("show");
})

meAvatarLink.addEventListener("mouseenter", () => {
    meAvatar.setAttribute("src", "images/me22.png")
})
meAvatarLink.addEventListener("mouseleave", () => {
    meAvatar.setAttribute("src", "images/me2.png")
})

// Content-btns

contentBtns[0].addEventListener("click", () => {
    contentPages[0].classList.remove("hide");
    contentPages[1].classList.add("hide");
    contentPages[2].classList.add("hide"); 
})
contentBtns[1].addEventListener("click", () => {
    contentPages[1].classList.remove("hide");
    contentPages[0].classList.add("hide");
    contentPages[2].classList.add("hide");
})
contentBtns[2].addEventListener("click", () => {
    contentPages[2].classList.remove("hide");
    contentPages[0].classList.add("hide");
    contentPages[1].classList.add("hide");
})