import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-admin-account',
  templateUrl: './create-admin-account.component.html',
  styleUrls: ['./create-admin-account.component.css']
})
export class CreateAdminAccountComponent implements OnInit {

  signup: FormGroup|any;
  constructor(){}

  ngOnInit(): void {
 this.signup = new FormGroup({
  'email': new FormControl(),
  'password': new FormControl(),
  'confirmPassword': new FormControl()

   })
  }

  signUpData(signup: FormGroup) {

    console.log(this.signup.value);

}
}
