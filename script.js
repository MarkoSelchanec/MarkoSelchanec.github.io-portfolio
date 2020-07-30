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
const svgLinks = [...document.getElementsByClassName("svg-link")];
const svgs = [...document.getElementsByClassName("svg-img")];


// svg hover 

for (let u = 0; u < svgLinks.length; u++) {
    svgLinks[u].addEventListener("mouseenter", () => {
        svgs[u].classList.add("svg-color-hover")
    })
}

for (let u = 0; u < svgLinks.length; u++) {
    svgLinks[u].addEventListener("mouseleave", () => {
        svgs[u].classList.remove("svg-color-hover")
    })
}

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
    contentBtns[iOne].classList.add("selected");
    contentBtns[iTwo].classList.remove("selected");
    contentBtns[iThree].classList.remove("selected");
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


// FORM email

window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("my-form-status");
    var subject = document.getElementById("form-subject");
    var email = document.getElementById("form-email");
    var message = document.getElementById("form-message");
    
    function success() {
      form.reset();
      button.style = "display: none ";
      status.innerHTML = "Thank you, I will contact you shortly!";
    }

    function error() {
        status.innerHTML = "Oops, something went wrong.";
    }

    form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        if (!subject.value || !email.value || message.value.length < 5) {
            status.innerHTML = "Please fill out all fields.";
        } else {
            var data = new FormData(form);
            ajax(form.method, form.action, data, success, error);
        }
    });
});

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
        } else {
        error(xhr.status, xhr.response, xhr.responseType);
        } 
    };
xhr.send(data);
}
