import {Component} from "@angular/core";
import {AngularFire} from "angularfire2/angularfire2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './app.navigation.html'
})

export class AppNavigation {

  public isLogged;
  public user = {};

  constructor(private router: Router, private af: AngularFire) {
    this.af.auth.subscribe(user => {
      if (user) {
        this.isLogged = true;
        this.router.navigate(['/']);

        console.info("Se ha logueado correctamente")
      } else {
        this.isLogged = false;
        console.info("Se ha deslogueado correctamente");
      }
    });
  }

  ngOnInit() {
    console.log('init!!!!');
  }


  logout() {
    this.af.auth.logout();
    this.isLogged = false;
    console.log('logout');
  }
}
