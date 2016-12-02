import {Component} from "@angular/core";
import {AngularFire} from "angularfire2/angularfire2";

@Component({
  selector: 'app-navigation',
  templateUrl: './app.navigation.html'
})

export class AppNavigation {

  public isLogged = true;

  constructor(public af:AngularFire){
    console.log(af);
  }


  logout() {
    this.af.auth.logout();
  }
}
