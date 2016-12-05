import {Component} from "@angular/core";
import {AngularFire} from "angularfire2/angularfire2";
import {Router} from "@angular/router";
import {FirebaseAuthState} from "angularfire2/index";

@Component({
  selector: 'app-navigation',
  templateUrl: './app.navigation.html'
})

export class AppNavigation {

  public isLogged;
  public user = {};
  public username;

  constructor(private router:Router, private af:AngularFire) {
    this.af.auth.subscribe(user => {
      if (user) {
        this.isLogged = true;
        this.router.navigate(['/']);
        this.username = this.getName(user);
      } else {
        this.isLogged = false;
        console.info("login error");
      }
    });
  }

  private getName(userAuth:FirebaseAuthState):string {
    let name;
    if (userAuth.auth.displayName == null) {
      name = userAuth.auth.email;
    }
    else {
      name = userAuth.auth.displayName;
    }
    return name;
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
