var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttr = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';
var osm_default = L.tileLayer(
	osmUrl,
	{
		attribution: osmAttr,
		maxZoom: 18
	});		
var mymap = L.map('map', {
	center: [60.05126, 30.33233],
	zoom: 9,
	layers: [osm_default]
});	

L.marker([60.05126, 30.33233]).addTo(mymap).bindPopup('Сейчас я здесь :)');

var popup = L.popup();
function onMapClick(e) {
	popup.setLatLng(e.latlng)
	latlng = e.latlng.toString().replace('LatLng','').replace('(','').replace(')','').split(',')	
	popup.setContent("Широта: " + latlng[0] + "<br>Долгота: " + latlng[1])
	popup.openOn(mymap);
}
mymap.on('click', onMapClick);