const url = "https://api.openweathermap.org/data/2.5/weather?q=Grantsville&appid=4064ac5716106daf558004d5c1a85bdd&units=imperial";
const currentTemp = document.querySelector('#temp');
const windSpeed = document.querySelector('#speed');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#description');

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    //For a sentence
    const words = desc.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    const capDesc = words.join(" ");

    //For one word
    //const capDesc = desc.charAt(0).toUpperCase() + desc.slice(1);

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', capDesc);
    captionDesc.textContent = capDesc;

    const airSpeed = weatherData.wind.speed;

    windSpeed.innerHTML = `${airSpeed}`;
}

//Windchill calculation
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


