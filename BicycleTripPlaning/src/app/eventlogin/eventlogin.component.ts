import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-eventlogin',
  templateUrl: './eventlogin.component.html',
  styleUrls: ['./eventlogin.component.css']
})
export class EventloginComponent {
  constructor(private ds:DataService,private r:Router,private fb:FormBuilder){}
  regform=this.fb.group({
    place:['',[Validators.required,Validators.pattern("")]],
    time:['',[Validators.required,Validators.pattern("")]],
    title:['',[Validators.required,Validators.pattern("")]],
    // phone:['',[Validators.required,Validators.pattern("[0-9]{10}")]],
    content:['',[Validators.required,Validators.pattern("")]]
  })

  

  clicked(){
   let place=this.regform.value.place
   let time=this.regform.value.time
  //  let ph=this.regform.value.phone
   let title=this.regform.value.title
   let content=this.regform.value.content
   if(this.regform.get("place")?.errors){
    alert("invalid place")
   }
   if(this.regform.get("time")?.errors){
    alert("invalid time")
   }
  //  if(this.regform.get("phone")?.errors){
  //   alert("invalid phone")
  //  }
   if(this.regform.get("title")?.errors){
    alert("invalid title")
   }
   if(this.regform.get("content")?.errors){
    alert("invalid content")
   }

   if(this.regform.valid){
    let res=this.ds.addevent(place,time,title,content)
    res.subscribe((resp:any)=>{
      if(resp){
      alert(resp.message)
      this.r.navigateByUrl("/event")

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


