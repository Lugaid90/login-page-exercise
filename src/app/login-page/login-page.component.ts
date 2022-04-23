import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm : FormGroup = new FormGroup({});
  loginRequestFailed = false;

  constructor(private loginService: LoginServiceService , private router:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'EMail' : new FormControl('', [Validators.required, Validators.email] , []),
      'Password' : new FormControl('', [Validators.required] , [])
    });
  }

  onSubmit(){
    // console.log("testi");
    // console.log(this.loginForm);
    // console.log(this.loginForm.value);

    var attempSuccessful = this.loginService.logInRequest(this.loginForm.value.EMail , this.loginForm.value.Password);

    if(!attempSuccessful){
      this.loginRequestFailed = true;
    }
    else{
      // routing to user profile page
      this.router.navigate(["/user"]);
    }
  }

}
