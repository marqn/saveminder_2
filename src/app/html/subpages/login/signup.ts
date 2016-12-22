import {Component} from '@angular/core';
import {AngularFire} from "angularfire2/angularfire2";

@Component({
  selector: 'signup',
  templateUrl: './signup.html'
})

export class Signup {

  public app_email;
  public pass;
  public pass2;
  public checkbox;

  constructor(private af:AngularFire) {}

  createNewUser()
  {
    console.log(this.checkbox);
    
    if(this.pass == this.pass2 && this.checkbox == true) {
      this.af.auth.createUser({email: this.app_email, password: this.pass});
      console.log('save new user');
    }
  }

}
