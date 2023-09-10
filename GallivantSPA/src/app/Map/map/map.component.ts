import { Component, ViewEncapsulation } from '@angular/core';
import { Layer, LeafletMouseEvent, icon, latLng, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
	optionsSpec: any = {
		layers: [{ url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png', attribution: '<a href="https://www.openaip.net/">openAIP Data</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-NC-SA</a>)' }],
		zoom: 5,
		center: [ 51.5072, 0.1276 ]
	};

	// Leaflet bindings
	zoom = this.optionsSpec.zoom;
	center = latLng(this.optionsSpec.center);
	options = {
		layers: [ tileLayer(this.optionsSpec.layers[0].url, { attribution: this.optionsSpec.layers[0].attribution }) ],
		zoom: this.optionsSpec.zoom,
		center: latLng(this.optionsSpec.center)
	};

  markers: Layer[] = [];

  public mapClick(event: LeafletMouseEvent) {
    console.log(event);
    const newMarker = marker(
			latLng(event.latlng.lat, event.latlng.lng),
			{
				icon: icon({
					iconSize: [ 25, 41 ],
					iconAnchor: [ 13, 41 ],
					iconUrl: 'assets/marker-icon.png',
					iconRetinaUrl: 'assets/marker-icon-2x.png',
					shadowUrl: 'assets/marker-shadow.png'
				})
			}
		);

		this.markers.push(newMarker);
  }

	public addMarker(latitude: number, longitude: number) {
		const newMarker = marker(
			latLng(latitude, longitude),
			{
				icon: icon({
					iconSize: [ 25, 41 ],
					iconAnchor: [ 13, 41 ],
					iconUrl: 'assets/marker-icon.png',
					iconRetinaUrl: 'assets/marker-icon-2x.png',
					shadowUrl: 'assets/marker-shadow.png'
				})
			}
		);

		this.markers.push(newMarker);
	}

	public removeMarker() {
		this.markers.pop();
	}
}
