const temp = document.querySelector("#temp").innerHTML;
const speed = document.querySelector("#speed").innerHTML;
const chillElement = document.querySelector("#chill");

const tempNum = Number(temp);
const speedNum = Number(speed);

let chill = 0

if (tempNum <= 50 && speedNum > 3.0) {
    let chill = 35.74 + 0.6215 * tempNum - 35.74 * (speedNum ** 0.16) + 0.4275 * tempNum * (speedNum ** 0.16);
    chillElement.innerHTML = chill.toFixed(1) + " F";
} else {
    chillElement.innerHTML = "N/A";
}


