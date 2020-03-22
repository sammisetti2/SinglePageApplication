import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userData = this.getData();
  
  constructor() {
    
  }
  
  ngOnInit() {
    
   
  }

  getData(){
    return JSON.parse(localStorage.getItem('userData'));
  }

}
