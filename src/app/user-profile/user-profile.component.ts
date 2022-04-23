import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  email = "testi";
  password = "testi";
  name = "testi";

  constructor(private router : Router, private loginService:LoginServiceService) { }

  ngOnInit(): void {
    var loggedInUser = this.loginService.getLoggedInAcc();
    this.email = loggedInUser.EMail;
    this.password = loggedInUser.Password;
    this.name = loggedInUser.Name;
  }

  onLogout(){
    this.router.navigate(['/']);
    this.loginService.logOut();
  }

}
