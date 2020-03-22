import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegistrationComponent } from './registration/registration.component';
import { UsersComponent } from './users/users.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },

  {
    path: "login",
    component: LoginComponent
  },
  {
    path:"contactus",
    component: ContactUsComponent
  },
  {
    path: "registration",
    component: RegistrationComponent
  },
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "login/forgotpassword",
    component: ForgotpasswordComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
