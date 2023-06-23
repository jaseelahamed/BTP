import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) {
   
   }
  login(uname:any,pswd:any){


    let data={
      uname,
      pswd
    }
    return this.hc.post("http://localhost:3000/login",data)
   
  }
  register( uname: any,email:any, pswd: any ) {

    let data={
      
      uname,
      email,
      pswd
    }
     return this.hc.post("http://localhost:3000/register",data)

}
  addevent( place: any,time:any, title: any ,content:any) {

    let data={
      place,
      time,
      title,
      content
    }
    console.log(data)
     return this.hc.post("http://localhost:3000/addevent",data)

}
getReminder(){
  const data ={userid:localStorage.getItem('currentusid')}
  console.log(data)
  return this.hc.post("http://localhost:3000/viewbook",data)
}

// chat room
 
}