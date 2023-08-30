import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-admin-account',
  templateUrl: './create-admin-account.component.html',
  styleUrls: ['./create-admin-account.component.css']
})
export class CreateAdminAccountComponent implements OnInit {

  signup: FormGroup|any;
  signuser:any;
  constructor(private _http: HttpClient, private route: Router){}

  ngOnInit(): void {
 this.signup = new FormGroup({
  'email': new FormControl(),
  'password': new FormControl(),
  'confirmPassword': new FormControl()

   })
  }

  // signUpData(signup: FormGroup) {
  //   this.signuser = this.signup.value.email;
  //  this._http.post<any>("http://localhost/3000/signup", this.signup.value)
  // .suscribe(res =>{
  // this._toast.success(this.signuser, 'Compte créer avec success');
  // this.signup.reset();
  // this.route.navigate(['login']);
  //  }, Error {
  // alert('erreur lors de la connection')

  // });
  // }
}
