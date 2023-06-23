import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private r:Router,private ds:DataService,private fb:FormBuilder){} 
  lgform=this.fb.group({
    uname:['',[Validators.required,Validators.pattern("[a-zA-Z 0-9]+")]],
   
   
    pswd:['',[Validators.required,Validators.pattern("[a-zA-Z0-9]{8,}")]]
  })
  
  
  clicked(){
    let uname=this.lgform.value.uname
    
    
    let pswd=this.lgform.value.pswd
  let result=this.ds.login(uname,pswd)
  if(this.lgform.get("uname")?.errors){
    alert("invalid uname")
   }
   if(this.lgform.get("email")?.errors){
    alert("invalid email")
   }
   if(this.lgform.valid){
  result.subscribe((resp:any)=>{
    if(resp){
  localStorage.setItem("currentUser",resp.currentUser)
  // localStorage.setItem("currentAcno",resp.currentAcno)
  // localStorage.setItem ("token",JSON.stringify(resp.token))
  alert(resp.message)
  this.r.navigateByUrl("Main")
    }
  },
  (err:any)=>{
    alert(err.error.message)
  })
 
}
else{
  alert("invalid data")
}
}
}