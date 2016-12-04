import {Component} from "@angular/core";
import {AngularFire, AuthProviders, AuthMethods } from "angularfire2";

@Component({
  selector: 'loginpage',
  templateUrl: './app.loginpage.html'
})

export class Loginpage {
  constructor(public af:AngularFire) {}

  public email;
  public pass;

  onKey(event:any) { // without type info
    this.email = event.target.value;
  }
  onKeyPass(event:any) { // without type info
    this.pass = event.target.value;
  }


  login(event) {

    console.log( this.email);

    this.af.auth.login(
      {
        email: this.email,
        password: this.pass
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
    )
  }

  fbGoogle() {
    this.af.auth.login()
  }

}
