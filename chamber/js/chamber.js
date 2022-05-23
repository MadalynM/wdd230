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

//Chamber Meeting Message
document.querySelector("#chamberMeeting").style.display = "none";
let day = new Date();
let weekDay = day.getDay();
if (weekDay == 1 || weekDay == 2) {
    document.querySelector("#chamberMeeting").style.display = "block";
}
