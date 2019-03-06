// const flightHandlerFunction = (buttonClicked) => {
//     buttonClicked.classList.ad
// }

const flightSection = document.querySelector("#flight");
const mindreadingSection = document.querySelector("#mindreading");
const xraySection = document.querySelector("#xray");

const allSections = document.querySelectorAll(".power");




document.querySelector("#activate-flight").addEventListener("click", function () {
    flightSection.classList.remove("disabled");
    flightSection.classList.add("enabled");
})

document.querySelector("#activate-mindreading").addEventListener("click", function () {
    mindreadingSection.classList.remove("disabled");
    mindreadingSection.classList.add("enabled");
})

document.querySelector("#activate-xray").addEventListener("click", function () {
    xraySection.classList.remove("disabled");
    xraySection.classList.add("enabled");
})

document.querySelector("#activate-all").addEventListener("click", function () {
    for (let i = 0; i < allSections.length; i++) {
        allSections[i].classList.remove("disabled");
        allSections[i].classList.add("enabled");
    }
})

document.querySelector("#deactivate-all").addEventListener("click", function () {
    for (let i = 0; i < allSections.length; i++) {
        allSections[i].classList.remove("enabled");
        allSections[i].classList.add("disabled");
    }
})