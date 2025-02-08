// JavaScript for place.html

document.addEventListener("DOMContentLoaded", function () {
    // Set current year in the footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Set last modified date in the footer
    document.getElementById("lastModified").textContent = document.lastModified;

    // Static temperature and wind speed values
    const temperature = 10; // Celsius
    const windSpeed = 5; // km/h

    // Function to calculate wind chill
    function calculateWindChill(temp, wind) {
        if (temp <= 10 && wind > 4.8) {
            return (
                13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)
            ).toFixed(2);
        } else {
            return "N/A";
        }
    }

    // Display wind chill factor
    document.getElementById("windchill").textContent = calculateWindChill(temperature, windSpeed) + " °C";
    document.getElementById("wind").textContent = windSpeed;
    document.getElementById("temperature").textContent = temperature;
});
