import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup;
  isInCorrect = false;
  Correct = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginform = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]]
    });
  }
  get username()
  {
    return this.loginform.get('username');
  }

  get password()
  {
    return this.loginform.get('password');
  }

  userData = this.getAllData();

  getAllData()
  {
    return JSON.parse(localStorage.getItem("userData"));
  }
  c = 0;
  login(data){
    this.c = 0;
    this.isInCorrect = false;
    this.Correct = false;
    for(var i = 0;i < this.userData.length;++i)
    {
      if(this.userData[i].username === data.value.username)
      {
        
        if(this.userData[i].password === data.value.password)
        {
          this.Correct = true;
          this.c = 1;
          this.loginform.reset();
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
