import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Router}from '@angular/router'
import { FormBuilder, Validators } from '@angular/forms';

import { DataService } from '../service/data.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

 dp:any=''
  constructor(private http: HttpClient,private r:Router,private ds:DataService,private fb:FormBuilder) {}
  selectedFile!: File;
 
  lgform=this.fb.group({
    dp:['',[Validators.required,Validators.pattern("")]],
   
   
    
  })
  
  
  clicked(){
    let dp=this.lgform.value.dp
    
    
   
  let res=dp
  console.log(res)
  return this.http.post("http://localhost:3000/adddp",res)
  .subscribe((resp:any)=>{
    if(resp){
  // localStorage.setItem("currentUser",resp.currentUser)
  // localStorage.setItem("currentAcno",resp.currentAcno)
  // localStorage.setItem ("token",JSON.stringify(resp.token))
  alert(resp.message)
  this.r.navigateByUrl("tdv")
    }
  },
  (err:any)=>{
    alert(err.error.message)
  })
 
}





 
 


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadImage() {
    if (this.selectedFile) {
      const uploadData = new FormData();
      this.dp=this.lgform.value.dp
      uploadData.append('image', this.selectedFile, this.selectedFile.name);
      uploadData.append('description',this.dp)

      this.http.post<any>('http://localhost:3000/api/trips/upload', uploadData).subscribe(
        (res) => {
          console.log('Image uploaded successfully:', res);
          alert(res.message)
           this.r.navigateByUrl("tdv")
          
        },
        (error) => {
          console.error('Failed to upload image:', error);
        }
      );
    }
  }
}
