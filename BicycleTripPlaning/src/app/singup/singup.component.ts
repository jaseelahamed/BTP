import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {
  constructor(private ds:DataService,private r:Router,private fb:FormBuilder){}
  regform=this.fb.group({
    uname:['',[Validators.required,Validators.pattern("[a-zA-Z 0-9]+")]],
    email:['',[Validators.required,Validators.pattern("[a-zA-Z 0-9_.+-]+@[a-zA-Z0-9_.+-]+\.[a-zA-Z0-9_.+-]")]],
    // usname:['',[Validators.required,Validators.pattern("[a-zA-Z 0-9]+")]],
    // phone:['',[Validators.required,Validators.pattern("[0-9]{10}")]],
    pswd:['',[Validators.required,Validators.pattern("[a-zA-Z0-9]{8,}")]]
  })

  

  clicked(){
   let uname=this.regform.value.uname
   let email=this.regform.value.email
  //  let ph=this.regform.value.phone
   let pswd=this.regform.value.pswd
   if(this.regform.get("uname")?.errors){
    alert("invalid uname")
   }
   if(this.regform.get("email")?.errors){
    alert("invalid email")
   }
  //  if(this.regform.get("phone")?.errors){
  //   alert("invalid phone")
  //  }
   if(this.regform.get("pswd")?.errors){
    alert("invalid password")
   }

   if(this.regform.valid){
    let res=this.ds.register(uname,email,pswd)
    res.subscribe((resp:any)=>{
      if(resp){
      alert(resp.message)
      this.r.navigateByUrl("/lg")

    }

  },
  (err:any)=>{
    alert(err.error.message)
  }
  )
    // if(res==true){
    //   alert("registration successful!!!")
    //   this.r.navigateByUrl("")
    // }
    // else{
    //   alert("registration failed")
    // }
}
  else{
    alert("invalid data")
  }

}
}
