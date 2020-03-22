import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationform: FormGroup;
 
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registrationform = this.fb.group({
     username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
     password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
     email: ['', [Validators.required, Validators.email]],
     phonenumber: ['', [Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]]
    })
    
    //this.registrationform.valueChanges.subscribe(console.log);
  }

  get username()
  {
    return this.registrationform.get('username');
  }

  get password()
  {
    return this.registrationform.get('password');
  }

  get email()
  {
    return this.registrationform.get('email');
  }

  get phonenumber()
  {
    return this.registrationform.get('phonenumber');
  }




  login(data){
    console.log(data.value);
    /*var currentlogin = {
      username:this.username,
      password:this.password,
      email:this.email,
      phonenumber:this.phonenumber
    }*/
    if(!this.isAnEntry('userData'))
    {
      localStorage.setItem("userData", JSON.stringify([]));
      var userData = this.getAllData();
      userData.push(data.value);
      this.updateData(userData);
      this.registrationform.reset();
    }
    else
    {
      var userData = this.getAllData();
      userData.push(data.value);
      this.updateData(userData);
      this.registrationform.reset();
    }
  }

  getAllData(){
    return JSON.parse(localStorage.getItem("userData"));
  }

  updateData(array){
    localStorage.setItem("userData", JSON.stringify(array));
  }

  isAnEntry(key){
    if(localStorage.getItem(key) != null){
      return true;
    }
    return false
  }
}
