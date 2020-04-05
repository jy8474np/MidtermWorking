let mapCenterCoordinates = [40.61, -100.55]  // Array of latitude and longitude
let zoomLevel = 3   // 1 = whole world, 10 = large city, 20 = city blocks

// Baker Street icon and parameters
let magnifyIcon = L.icon ({
    iconUrl: 'magnifyingGlass.png',
    iconSize: [50, 50],
    iconAnchor: [25, 25]
})

// Reichenbach icon and parameters
let skullIcon = L.icon ({
    iconUrl: 'skull.png',
    iconSize: [50, 50],
    iconAnchor: [25, 25]
})

// Create the map
let map = L.map('bridge-map').setView(mapCenterCoordinates, zoomLevel)

// Provide the tile Layer
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy;  <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoiank4NDc0bnAiLCJhIjoiY2s3ZmI2Z25xMDEyaDNodDZ3NjM2c3p1cyJ9.5hnaCYCC_PyqsBInKBYnKQ'
}).addTo(map)

// Baker Street Coordinates
let bakerStreetCoordinates = [51.520664584, -0.15499938]
let bakerStreetMarker = L.marker(bakerStreetCoordinates, {icon: magnifyIcon}) // Magnifying glass icon
    .bindPopup("221b Baker St, London, United Kingdom")
    .addTo(map)

// Reichenbach Falls Coordinates
let reichenbachCoordinates = [46.708163834, 8.176499294]
let reichenbachMarker = L.marker(reichenbachGateCoordinates, {icon: skullIcon})
    .bindPopup("Reichenbach Falls, Meiringen, Switzerland")
    .addTo(map)

// Makinac Bridge Coordinates
let mackinacCoordinates = [46.708163834, 8.176499294]
let mackinacMarker = L.marker(mackinacCoordinates, {icon: icon})
    .bindPopup("Mackinac Bridge, Span: 1,158.0 m")
    .addTo(map)

// George Washington Bridge Coordinates
let georgeWashintonCoordinates = [40.8517, -73.9527]
let georgeWashintonMarker = L.marker(georgeWashintonCoordinates, {icon: icon})
    .bindPopup("George Washington Bridge, Span: 1,067.0 m")
    .addTo(map)

// Tacoma Narrows Bridge Coordinates
let tacomeCoordinates = [47.2690, -122.5517]
let tacomaMarker = L.marker(tacomeCoordinates, {icon: icon})
    .bindPopup("Tacoma Narrows Bridge, Span: 853.44 m")
    .addTo(map)
