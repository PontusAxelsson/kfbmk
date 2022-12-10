import { useEffect } from 'react'
import { initMap } from './googleMapInit'

export default function Map() {
	useEffect(() => {
		const mapContainer = document.getElementById('map')
		if (mapContainer) {
			initMap(mapContainer)
		}
	}, [])

	return (
		<div>
			<div id="map" style={{ width: '100vw', height: '60vh' }}></div>
		</div>
	)
}
