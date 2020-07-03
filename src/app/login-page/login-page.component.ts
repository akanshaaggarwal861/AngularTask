import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';
import { LoggedService } from './../logged.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  
  userName ="";
  password ="";
  user: any= {};
  loginform: FormGroup;

  constructor(private ls: LoggedService, private fb: FormBuilder) { }

  ngOnInit(): void {
    var LoggedIn = localStorage.getItem("isLogin");
    if (LoggedIn === "true") {
      window.location.replace("/home");
    }
    this.createloginform();
  }
  createloginform()
  {
    this.loginform = this.fb.group({
      email: [null],
      password: [null]
    });
  }
  loginUser()
  {
    this.user = Object.assign(this.user, this.loginform.value);
    localStorage.setItem('Users', JSON.stringify(this.user));
    if ((this.user.email == "Akansha" && this.user.password == "Assignment") || (this.user.email == "tanya" && this.user.password == "Assignment") || (this.user.email == "Anuradha" && this.user.password == "Assignment"))
    {
      localStorage.setItem("isLogin", "true");
      localStorage.setItem("User", this.user.email);
      localStorage.setItem("password",this.user.password);
      window.location.replace("/home");
  }


}
}
