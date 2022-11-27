// Initialize and add the map
export function initMap(mapContainer: HTMLElement): void {
	// The location of vikenHallen
	const vikenHallen = new google.maps.LatLng(55.7827633, 13.0913239);
	// The map, centered at vikenHallen
	const map = new google.maps.Map(mapContainer, {
		zoom: 12,
		center: vikenHallen,
		disableDefaultUI: true,
	});

	// The marker, positioned
	new google.maps.Marker({
		position: vikenHallen,
		map,
		title: 'Vikenhallen',
	});
}
