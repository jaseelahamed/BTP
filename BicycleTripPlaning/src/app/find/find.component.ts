import { Component, OnInit } from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit{

  map: any;

  ngOnInit() {
    this.initializeMap();
  }

  private initializeMap() {
    const mapOptions = {
      center: new google.maps.LatLng(11.4066, 76.6932), // Replace with Ooty's latitude and longitude
      zoom: 12 // Adjust zoom level as desired
    };
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }
}
