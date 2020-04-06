let mapCenterCoordinates = [51, 2]  // Array of latitude and longitude
let zoomLevel = 5 // Set map default zoom level

// Author icon and parameters
let penIcon = L.icon ({
    iconUrl: 'pen.png',
    iconSize: [50, 50],
    iconAnchor: [25, 25]
})

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

// Reichenbach icon and parameters
let beeIcon = L.icon ({
    iconUrl: 'bee.png',
    iconSize: [50, 50],
    iconAnchor: [25, 25]
})

// Establish the map using coordinates and zoom level from above
let map = L.map('holmes-map').setView(mapCenterCoordinates, zoomLevel)

// Tile Layer
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy;  <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoiank4NDc0bnAiLCJhIjoiY2s3ZmI2Z25xMDEyaDNodDZ3NjM2c3p1cyJ9.5hnaCYCC_PyqsBInKBYnKQ'
}).addTo(map)

// Edinburgh Coordinates
let authorCoordinates = [55.95206, -3.19648]
let authorMarker = L.marker(authorCoordinates, {icon: penIcon}) // Marker as pen icon
    .bindPopup("Edinburgh, Scotland, United Kingdom")
    .addTo(map)

// Baker Street Coordinates
let bakerStreetCoordinates = [51.520664584, -0.15499938]
let bakerStreetMarker = L.marker(bakerStreetCoordinates, {icon: magnifyIcon}) // Marker as magnifying glass icon
    .bindPopup("221b Baker St, London, United Kingdom")
    .addTo(map)

// Reichenbach Falls Coordinates
let reichenbachCoordinates = [46.708163834, 8.176499294]
let reichenbachMarker = L.marker(reichenbachCoordinates, {icon: skullIcon}) // Marker as skull icon
    .bindPopup("Reichenbach Falls, Meiringen, Switzerland")
    .addTo(map)

// Eastbourne Coordinates
let eastbourneCoordinates = [50.76871, 0.28453]
let eastbourneMarker = L.marker(eastbourneCoordinates, {icon: beeIcon}) // Marker as bee icon
    .bindPopup("East Dean on the South Downs, Eastbourne, United Kingdom")
    .addTo(map)
