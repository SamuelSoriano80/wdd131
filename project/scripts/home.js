document.getElementById('currentyear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = "Last modified: " + document.lastModified;

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");

    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("active");
        menuToggle.textContent = sidebar.classList.contains('active') ? '✖' : '☰';
    });
});