import { Component } from '@angular/core';
// import { DataService } from '../service/data.service';
// import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  item:any 
  // item: string[] = [];
  constructor(private http: HttpClient) {
    
  this.http.get("http://localhost:3000/allevent").subscribe((response) => {
   

   
    // console.log(event)
    // console.log(response);
    this.item=response
    console.log(this.item)
  }, (error) => {
    
    console.error(error);
  });
   }

  

  // reminder:any
  // constructor(private ds:DataService,private r:Router){
  //   ds.getReminder().subscribe((res:any)=>{
  //     console.log(res)
  //     this.reminder=res.data
  //   }),
  //   (err:any)=>{ 
  //     console.log(err.error.message)
  //   }
   
  // }
}
