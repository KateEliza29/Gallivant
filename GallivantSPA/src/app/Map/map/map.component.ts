import {Component, NgZone} from '@angular/core';

import { Layer, LeafletMouseEvent, icon, latLng, marker, tileLayer } from 'leaflet';
import { VisitDetailsComponent } from '../visit-details/visit-details.component';
import { Visit } from 'src/app/Models/visit.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
	public visit!: Visit;
	static dialog: MatDialog;

	constructor(public dialog: MatDialog, private ngZone: NgZone) {}

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
	console.log(this);
	this.visit = {visitID: 1, visitName: 'hey there', visitCoords: '12345, 12345', visitRating: 5}
    const dialogRef = this.dialog.open(VisitDetailsComponent);

	dialogRef.afterClosed().subscribe(result => {
		console.log('The dialog was closed');
		this.visit = result;
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
		newMarker.on('click', () => {
			this.ngZone.run(() => {
			  this.openDialog();
			});
		  });

		this.markers.push(newMarker);
	  });

	console.log(this);

  }

  public openDialog() {
	this.visit = {visitID: 1, visitName: 'hey there', visitCoords: '12345, 12345', visitRating: 5}
	const dialogRef = this.dialog.open(VisitDetailsComponent);
  
	dialogRef.afterClosed().subscribe(result => {
		console.log('The dialog was closed');
		this.visit = result;
  });
}
}
