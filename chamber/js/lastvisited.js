const daysBetweenVisit = document.querySelector("#visits");

let lastVisit = Number(window.localStorage.getItem("visit"));
let today = Date.now();

let daysMs = today - lastVisit;
let days = daysMs / 86400000;
const daysRounded = Math.round(days);

daysBetweenVisit.textContent = daysRounded;

localStorage.setItem("visit", today);
