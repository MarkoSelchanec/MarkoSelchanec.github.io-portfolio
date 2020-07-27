const dropDownMedia = document.getElementsByClassName("nav-media")[0];
const navMedia = document.getElementsByClassName("nav-outer-media")[0];
const nav = document.getElementsByClassName("navbar")[0];
const navDrop = document.getElementsByClassName("navbar-dropdown")[0];

const meAvatar = document.getElementsByClassName("content-avatar")[0];
const meAvatarLink = document.getElementById("content-avatar");
const burBar = document.getElementsByClassName("nav-burger")[0];



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
