// Hamburger Button
function toggleMenu () {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

//Current Date
let dateField = document.querySelector("#currentDate");

const now = new Date();
const fullDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

dateField.innerHTML = `<em>${fullDate}</em>`;

//Last Updated 
let lastModify = new Date (document.lastModified)

document.getElementById("lastUpdated").textContent = lastModify;