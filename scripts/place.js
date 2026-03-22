const temp = 5;
const wind = 10;

const windChillElement = document.getElementById("windchill");
const yearElement = document.getElementById("currentyear");
const lastModifiedElement = document.getElementById("lastModified");

function calculateWindChill(t, v) {
  return 13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16);
}

let windChill;

if (temp <= 10 && wind > 4.8) {
  windChill = calculateWindChill(temp, wind).toFixed(1) + " °C";
} else {
  windChill = "N/A";
}

windChillElement.textContent = windChill;

const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

lastModifiedElement.textContent = document.lastModified;