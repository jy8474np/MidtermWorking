let bridgeCenterCoordinates = [40.61, -100.55]  // Array of latitude and longitude
let zoomLevel = 3   // 1 = whole world, 10 = large city, 20 = city blocks

// assign icon and define parameter details
let icon = L.icon ({
    iconUrl: 'bridge.png',
    iconSize: [50, 50],
    iconAnchor: [25, 25]
})

// Create the map
let map = L.map('bridge-map').setView(bridgeCenterCoordinates, zoomLevel)

// Provide the tile Layer
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy;  <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoiank4NDc0bnAiLCJhIjoiY2s3ZmI2Z25xMDEyaDNodDZ3NjM2c3p1cyJ9.5hnaCYCC_PyqsBInKBYnKQ'
}).addTo(map)

// Verrazano-Narrows Bridge Coordinates
let verrazanoCoordinates = [40.6066, -74.0447]
let verrazanoMarker = L.marker(verrazanoCoordinates, {icon: icon}) // icon added, repeated for each
    .bindPopup("Verrazano-Narrows Bridge, Span: 1,298.4 m")
    .addTo(map)

// Golden Gate Bridge Coordinates
let goldenGateCoordinates = [37.8199, -122.4783]
let goldenGateMarker = L.marker(goldenGateCoordinates, {icon: icon})
    .bindPopup("Golden Gate Bridge, Span: 1,280.2 m")
    .addTo(map)

// Makinac Bridge Coordinates
let mackinacCoordinates = [45.8174, -84.7278]
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
