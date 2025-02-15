document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Last modified: " + document.lastModified;

const nav = document.querySelector('nav ul');
const hamburger = document.createElement('button');
hamburger.textContent = '☰';
document.querySelector('header').appendChild(hamburger);

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.textContent = nav.classList.contains('active') ? '✖' : '☰';
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 53977,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/200x320/tokyo_japan_temple-evening.jpeg"
    },
    {
        templeName: "São Paulo Brazil",
        location: "São Paulo, Brazil",
        dedicated: "1978, October, 30",
        area: 59246,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-756468-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake City Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
    }
];

const container = document.getElementById("temples-container");

function displayTemples(filterFn = () => true) {
    container.innerHTML = "";
    temples.filter(filterFn).forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("temple-card");
        card.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;
        container.appendChild(card);
    });
}

displayTemples();

document.getElementById("home").addEventListener("click", () => displayTemples());
document.getElementById("old").addEventListener("click", () => displayTemples(t => parseInt(t.dedicated.split(",")[0]) < 1900));
document.getElementById("new").addEventListener("click", () => displayTemples(t => parseInt(t.dedicated.split(",")[0]) > 2000));
document.getElementById("large").addEventListener("click", () => displayTemples(t => t.area > 90000));
document.getElementById("small").addEventListener("click", () => displayTemples(t => t.area < 10000));