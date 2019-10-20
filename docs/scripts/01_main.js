
// map

var CartoDB_DarkMatterNoLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
});

var CartoDB_DarkMatterOnlyLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
});

var Stamen_Terrain = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 18,
	ext: 'png'
});
$('mapid').height(window.innerHeight)

var map = L.map('mapid', {
	renderer: L.canvas(),
  center: [38.893908, -77.036541],
  zoom: 13,
  layers: [CartoDB_DarkMatterNoLabels, CartoDB_DarkMatterOnlyLabels],
  doubleClickZoom: false,
  boxZoom: false,
  zoomControl: true,
  minZoom: 12
});


L.Routing.control({
        waypoints: [
          L.latLng(38.893908, -77.0155),
          L.latLng(38.8940, -77.036541)
        ],
        routeWhileDragging: true,
        geocoder: L.Control.Geocoder.nominatim()
    })
    .on('routeselected', function(e) {
        var route = e.route;
        console.log('Showing route between waypoints:\n' + JSON.stringify(route.coordinates, null, 2));
    })
    .addTo(map);
