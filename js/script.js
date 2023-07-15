document.getElementsByClassName("copy")[0].innerHTML = '&copy; Vitalii Vovk, ' + new Date().getFullYear();

// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Map
const osm_default = L.tileLayer(
	'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
	{
		attribution: '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
		maxZoom: 18
	});		
const mymap = L.map('map', {
	center: [60.05126, 30.33233],
	zoom: 9,
	layers: [osm_default]
});	
L.marker([60.05126, 30.33233]).addTo(mymap).bindPopup('Сейчас я здесь :)');