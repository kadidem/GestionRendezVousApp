import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  login:FormGroup | any; 

  constructor() { }

    
  
  ngOnInit(): void {
    this.login = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl()
    })


  }

  loginData(login:FormGroup){
    console.log(this.login.value);
  }

}
