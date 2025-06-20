// Inicializa un mapa Leaflet centrado en México
var map = L.map('map').setView([23.6345, -102.5528], 5);

// Añade un mapa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Añade un marcador de ejemplo (CDMX)
L.marker([19.4326, -99.1332]).addTo(map)
  .bindPopup('¡Hola! Este es un ejemplo de mapa interactivo en tu portafolio SIG.')
  .openPopup();
