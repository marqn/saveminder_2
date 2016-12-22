import {Component} from "@angular/core";
import {AngularFire, AuthProviders, AuthMethods } from "angularfire2";

@Component({
  selector: 'loginpage',
  templateUrl: './loginpage.html'
})

export class Loginpage {
  constructor(public af:AngularFire) {}

  public user_email:string;
  public user_password:string;
  public reset_email:string;

  login() {

    this.af.auth.login(
      {
        email: this.user_email,
        password: this.user_password
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      }
    );
  }

  fbLogin() {
    this.af.auth.login(
      {
        provider: AuthProviders.Facebook,
        method: AuthMethods.Redirect,
      }
    );
  }

  fbGoogle() {
    this.af.auth.login();
  }

  resetEmail() {
    // this.af.auth.getAuth().auth.
    // this.af.auth.getAuth().sendPasswordResetEmail(this.reset_email);

  }

}
