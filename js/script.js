document.addEventListener("DOMContentLoaded", () => {
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
	let map  = document.getElementById('map');
	if (map) {
		let lat = map.getAttribute('pycv_lat');
		let lon = map.getAttribute('pycv_lon');
		let msg = map.getAttribute('pycv_msg');

		const mymap = L.map('map', {
			center: [lat, lon],
			zoom: 9,
			layers: [osm_default]
		});
		L.marker([lat, lon]).addTo(mymap).bindPopup(msg);
	}
});
