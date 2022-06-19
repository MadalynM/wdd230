const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const cards = document.querySelector(".cards");
const requestURL = "js/data.json";

gridbutton.addEventListener("click", () => {
	cards.classList.add("grid");
	cards.classList.remove("list");
});

listbutton.addEventListener("click", () => {
    cards.classList.add("list");
	cards.classList.remove("grid");
});

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
    data.businesses.forEach(business => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let busImage = document.createElement('img');
        let busAddress = document.createElement('p');
        let busPhone = document.createElement('p');
        let busWebsite = document.createElement('p');

        h2.textContent = `${business.name}`;
        busAddress.textContent = `${business.address}`;
        busPhone.textContent = `${business.phone}`;
        busWebsite.textContent = `${business.website}`;

        busImage.setAttribute('src', business.image);
        busImage.setAttribute('alt', `Image of ${business.name}`);
        busImage.setAttribute('loading', 'lazy');

        card.appendChild(busImage);
        card.appendChild(h2);
        card.appendChild(busAddress);
        card.appendChild(busPhone);
        card.appendChild(busWebsite);
        
        document.querySelector('div.cards').appendChild(card);
    });
    
}