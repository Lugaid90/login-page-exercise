import { Injectable } from '@angular/core';
import { UserAccount } from './user-account';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private registered_accounts : UserAccount[] = [
    {EMail : "dingsbums@awesome.de" , Password: "BarneyStinson", Name: "Barney Stinson"},
    {EMail : "corona@leugner.de" , Password: "greatReset", Name: "Ken Jebsen"},
    {EMail : "normal_guy@gmail.com" , Password: "1234", Name: "Eric Generic"}
  ];

  private logged_in = false;
  private logged_in_account :UserAccount = {EMail:'',Password:'', Name: ''};

  constructor() { }

  logInRequest(email : string , password : string) : boolean {
    // console.log("LogIn Request started with " + email + " and " + password);
    for (var account of this.registered_accounts){
      // console.log(account);
      // console.log({EMail:email , Password: password });
      if (account.EMail === email && account.Password === password ){
        // console.log("Match Found with ");
        // console.log(account);
        this.logged_in = true;
        this.logged_in_account = account;
        break;
      }
    }

    return this.logged_in;
  }

  getLoggedInAcc(){
    return this.logged_in_account
  }

  logOut(){
    this.logged_in = false;
  }

}
