
import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-routplanner',
  templateUrl: './routplanner.component.html',
  styleUrls: ['./routplanner.component.css']
})
export class RoutplannerComponent  implements OnInit{

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
