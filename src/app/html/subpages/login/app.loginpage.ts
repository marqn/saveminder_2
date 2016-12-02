import {Component} from "@angular/core";
import {AngularFire} from "angularfire2";

@Component({
  selector: 'loginpage',
  templateUrl: './app.loginpage.html'
})

export class Loginpage {
  constructor(public af:AngularFire) {}

  login() {
    this.af.auth.login();
  }

  
}
