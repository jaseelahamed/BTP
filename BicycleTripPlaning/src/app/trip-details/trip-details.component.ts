import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit{
  // imagePath: string = 'http://localhost:4200/uploads/image-1687160406282.jpg';
  trips: any[] = [];
item:any
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/api/trips').subscribe(
      (res) => {
        this.trips = res;
        this.item
        console.log(res)
      },
      (error) => {
        console.error('Failed to fetch trips:', error);
      }
    );
  }
}
