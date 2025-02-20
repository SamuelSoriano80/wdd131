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

function updateCounter() {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
  
    reviewCount++;
  
    localStorage.setItem('reviewCount', reviewCount);
  
    const counterElement = document.getElementById('reviewCounter');
    counterElement.textContent = `You have visited this page: ${reviewCount}`;
}

document.addEventListener('DOMContentLoaded', updateCounter);