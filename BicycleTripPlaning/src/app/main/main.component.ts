import { Component } from '@angular/core';import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private r:Router,){} 
  logout(){
    this.r.navigateByUrl("")
 
    localStorage.removeItem("currentUser")
  }
}
