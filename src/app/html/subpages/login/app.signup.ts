import {Component} from '@angular/core';
import {AngularFire} from "angularfire2/angularfire2";

@Component({
  selector: 'signup',
  templateUrl: './app.signup.html'
})

export class Signup {

  public email;
  public pass;
  public pass2;

  constructor(private af:AngularFire) {

  }

  createNewUser()
  {
    let credentials;
    credentials.email = this.email;
    credentials.password = this.pass;

    if(this.pass == this.pass2) {
      this.af.auth.createUser(credentials);
      console.log('save new user');
    }
  }

}
