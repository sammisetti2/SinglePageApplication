import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  forgotpasswordform:FormGroup;
  isInCorrect = false;
  Correct = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.forgotpasswordform = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  get username()
  {
    return this.forgotpasswordform.get('username');
  }

  get password()
  {
    return this.forgotpasswordform.get('email');
  }

  userData = this.getAllData();

  getAllData()
  {
    return JSON.parse(localStorage.getItem("userData"));
  }
  reqpassword;
  c = 0;
  login(data){
    this.c = 0;
    this.isInCorrect = false;
    this.Correct = false;
    for(var i = 0;i < this.userData.length;++i)
    {
      if(this.userData[i].username === data.value.username)
      {
        
        if(this.userData[i].email === data.value.email)
        {
          this.Correct = true;
          this.c = 1;
          this.reqpassword = this.userData[i].password;
          this.forgotpasswordform.reset();
          break;
        }
      }
    }
    
    if(this.c === 0)
    {
      this.isInCorrect = true;
    }
  }

}
