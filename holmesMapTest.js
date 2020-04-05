let mapCenterCoordinates = [50, 2]  // Array of latitude and longitude
let zoomLevel = 5// 1 = whole world, 10 = large city, 20 = city blocks

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
