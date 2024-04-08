import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [GoogleMapsModule,CommonModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {
  @ViewChild('mapContainer') mapContainer!: ElementRef;


  ngAfterViewInit() {
    const map = new google.maps.Map(this.mapContainer.nativeElement, {
      mapId: '25dbedcff760ad6e',
    });
  }

  n(): void {}

  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 41.7151598240109 ,
    lng: 44.776972125023185,
  };
  zoom = 20;
  markerOptions = {
    animation: google.maps.Animation.DROP, // Change the marker animation style
    icon: {
      url: 'assets/pics/pin1.png', // Replace with the URL of your custom marker image
      scaledSize: new google.maps.Size(50, 66), // Adjust the size of the custom marker
    },
    draggable: false,
  };

  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: false,
    panControl: true,
    scrollwheel: true,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeControl: false,
    disableDoubleClickZoom: false,
    maxZoom: 18,
    minZoom: 6,
    mapId: '25dbedcff760ad6e',
  };

}
