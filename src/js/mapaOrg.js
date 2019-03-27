var platform = new H.service.Platform({
    'app_id': '6KZF7fTyJhZnoww41JjO',
    'app_code': '0DJqkbCOzlBYeMqbXIUw9w'
  });

var defaultLayers = platform.createDefaultLayers();

const lat = 19.421439; 
const long = -99.163237;
// Instantiate (and display) a map object:
var map = new H.Map(
  document.getElementById('mapContainer'),
  defaultLayers.normal.map,
  {
    zoom: 15,
    center: { lat: lat, lng: long }
  });