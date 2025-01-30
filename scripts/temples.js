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