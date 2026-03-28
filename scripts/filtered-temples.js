const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");

year.textContent = today.getFullYear();

lastModified.textContent = "Last Modified: " + document.lastModified;
menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
    {
    templeName: "Curitiba Brazil Temple",
    location: "Curitiba, Brazil",
    dedicated: "2008, June, 1",
    area: 27850,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/curitiba-brazil-temple/curitiba-brazil-temple-1078-main.jpg"
  },
    {
        templeName: "Brasília Brazil Temple",
        location: "Brasília, Brazil",
        dedicated: "2023, September, 17",
        area: 25000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/brasilia-brazil-temple/brasilia-brazil-temple-39184-main.jpg"
    },
    {
        templeName: "Oaxaca Mexico Temple",
        location: "Oaxaca, Mexico",
        dedicated: "2000, March, 11",
        area: 10700,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/oaxaca-mexico-temple/oaxaca-mexico-temple-41774-main.jpg"
    },
     {
        templeName: "Phoenix Arizona Temple",
        location: "Phoenix, Arizona, United States",
        dedicated: "2014, November, 16",
        area: 64870,
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/phoenix-arizona-temple/phoenix-arizona-temple-12711-main.jpg"
    },
    {
        templeName: "Winchester Virginia Temple",
        location: "Winchester, Virginia, United States",
        dedicated: "2025, August, 9",
        area: 30000,
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/winchester-virginia-temple/winchester-virginia-temple-56021-main.jpg"
    },
  // Add more temple objects here...
];


const container = document.querySelector(".gallery");

function displayTemples(templeList) {
    container.innerHTML = "<h1>Temple Album</h1>";

    templeList.forEach(temple => {
        let card = document.createElement("section");

        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;

        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;

        img.src = temple.imageUrl;
        img.alt = `${temple.templeName} Temple`;
        img.loading = "lazy";

        card.append(name, location, dedicated, area, img);
        container.appendChild(card);
    });
}

function getYear(temple) {
    return parseInt(temple.dedicated);
}

function filterOld() {
    displayTemples(temples.filter(t => getYear(t) < 1900));
}

function filterNew() {
    displayTemples(temples.filter(t => getYear(t) > 2000));
}

function filterLarge() {
    displayTemples(temples.filter(t => t.area > 90000));
}

function filterSmall() {
    displayTemples(temples.filter(t => t.area < 10000));
}

function showAll() {
    displayTemples(temples);
}

displayTemples(temples);

document.getElementById("old").addEventListener("click", function (e) {
    e.preventDefault();
    filterOld();
});

document.getElementById("new").addEventListener("click", function (e) {
    e.preventDefault();
    filterNew();
});

document.getElementById("large").addEventListener("click", function (e) {
    e.preventDefault();
    filterLarge();
});

document.getElementById("small").addEventListener("click", function (e) {
    e.preventDefault();
    filterSmall();
});

document.getElementById("home").addEventListener("click", function (e) {
    e.preventDefault();
    displayTemples(temples);
});