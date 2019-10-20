
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
	minZoom: 2,
	maxZoom: 18,
	ext: 'png'
});
$('mapid').height(window.innerHeight)

var map = L.map('mapid', {
	renderer: L.canvas(),
  center: [39.002434, -77.181233],
  zoom: 11,
  layers: [Stamen_Terrain],
  doubleClickZoom: true,
  boxZoom: false,
  zoomControl: true,
  minZoom: 0
});


L.Routing.control({
        waypoints: [
          L.latLng(39.138392, -77.406748),
          L.latLng(38.8940, -77.036541)
        ],
        routeWhileDragging: true,
    })
    .on('routeselected', function(e) {
        var route = e.route;
        console.log('Showing route between waypoints:\n' + JSON.stringify(route.coordinates, null, 4));
    })
    .addTo(map);
