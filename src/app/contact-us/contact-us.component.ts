import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactusform:FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactusform = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      text: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

  get username(){
    return this.contactusform.get("name");
  }

  get email(){
    return this.contactusform.get("email");
  }

  get text(){
    return this.contactusform.get("text");
  }

  login(data){
    console.log(data.value);
    if(!this.isAnEntry('inquiryData'))
    {
      localStorage.setItem("inquiryData", JSON.stringify([]));
      var inquiryData = this.getAllData();
      inquiryData.push(data.value);
      this.updateData(inquiryData);
      this.contactusform.reset();
    }
    else
    {
      var inquiryData = this.getAllData();
      inquiryData.push(data.value);
      this.updateData(inquiryData);
      this.contactusform.reset();
    }
  }

  getAllData(){
    return JSON.parse(localStorage.getItem("inquiryData"));
  }

  updateData(array){
    localStorage.setItem("inquiryData", JSON.stringify(array));
  }

  isAnEntry(key){
    if(localStorage.getItem(key) != null){
      return true;
    }
    return false
  }

}
