const requestURL = "js/data.json";

async function getBusinesses() {
    let response = await fetch(requestURL);
    if (response.ok) {
        let data = await response.json();
        // console.log(data);
        displayBusinesses(data);
    } else {
        throw Error(response.statusText);
    }
}

getBusinesses();

function displayBusinesses(data) {
    let correctBusiness = data.businesses.filter(business => business.membership == "Gold" || business.membership == "Non-Profit");

    let firstBusiness = correctBusiness[Math.floor(Math.random()*correctBusiness.length)];
    let businessList = correctBusiness.filter(business => business != firstBusiness);
    let secondBusiness = businessList[Math.floor(Math.random()*businessList.length)];

    let titleOne = document.querySelector("#title-one");
    let taglineOne = document.querySelector("#tagline-one");
    let emailOne = document.querySelector("#email-one");
    let phoneOne = document.querySelector("#phone-one");

    let titleTwo = document.querySelector("#title-two");
    let taglineTwo = document.querySelector("#tagline-two");
    let emailTwo = document.querySelector("#email-two");
    let phoneTwo = document.querySelector("#phone-two");

    titleOne.innerHTML = `${firstBusiness.name}`;
    taglineOne.innerHTML = `"${firstBusiness.tagline}"`;
    emailOne.innerHTML = `${firstBusiness.email}`;
    phoneOne.innerHTML = `${firstBusiness.phone} | ${firstBusiness.website}`;

    titleTwo.innerHTML = `${secondBusiness.name}`;
    taglineTwo.innerHTML = `"${secondBusiness.tagline}"`;
    emailTwo.innerHTML = `${secondBusiness.email}`;
    phoneTwo.innerHTML = `${secondBusiness.phone} | ${secondBusiness.website}`;
}