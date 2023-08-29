const findElement = (element,parent=document) => {
    return parent.querySelector(element)
}

const elCards = findElement(".cards");
const elTemplate = findElement("#template").content;
const elSearchInput = findElement("#search-input");
const africa = findElement("#africa");
const america = findElement("#america");
const asia = findElement("#asia");
const europe = findElement("#europe");
const oceania = findElement("#oceania");

function renderCountries(array, parent) {
    parent.innerHTML = null;
    const fragment = document.createDocumentFragment();
    array.forEach((country) => {
        const newCard = elTemplate.cloneNode(true);
        const img = findElement(".card-img-top", newCard);
        const title = findElement(".card-title", newCard);
        const population = findElement(".card-population", newCard);
        const region = findElement(".card-region", newCard);
        const capital = findElement(".card-capital", newCard);
        img.src = country.flags.png;
        title.textContent = country.name.common;
        population.textContent = country.population;
        region.textContent = country.region;
        capital.textContent = country.capital;
        
        fragment.appendChild(newCard);
    });
    parent.appendChild(fragment);
}

fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);  
        renderCountries(data, elCards);
        countries = data;
});

elSearchInput.addEventListener("input", (evt) => {

    const newArray = []
    countries.forEach((countries) => {
        if (countries.name.official.toLowerCase().includes(elSearchInput.value.toLowerCase())) {
            newArray.push(countries) 
        }
    });

    renderCountries(newArray, elCards)
});

africa.addEventListener("click", () => {
    const africa = [];

    countries.forEach((element) => {
        if (element.continents === "Africa") {
            africa.push(element)
        }
    })
    renderCountries(africa, elCards)
})

america.addEventListener("click", () => {
    const america = [];
  
    countries.forEach((element) => {
      if (
        element.continents == "North America" ||
        element.continents == "South America"
      ) {
        america.push(element);
      }
    });
    renderCountries(america, elCards);
});

asia.addEventListener("click", () => {
    const asia = [];
  
    countries.forEach((element) => {
        if (element.continents == "Asia") {
            asia.push(element);
        }
    });
    renderCountries(asia, elCards);
});
  
europe.addEventListener("click", () => {
    const europe = [];
  
    countries.forEach((element) => {
        if (element.continents == "Europe") {
            europe.push(element);
        }
    });
    renderCountries(europe, elCards);
});
  
oceania.addEventListener("click", () => {
    const ocean = [];
  
    countries.forEach((element) => {
        if (element.continents == "Oceania") {
            ocean.push(element);
        }
    });
    renderCountries(ocean, elCards);
});