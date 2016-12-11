import {Component} from "@angular/core";
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-manager',
  templateUrl: './app.manager.html'
})

export class AppManager {

  constructor(af:AngularFire)
  {
    const cat:FirebaseListObservable<any> = af.database.list('users');

    cat.subscribe(console.log);

    af.auth.subscribe(
        auth => console.log(auth.uid)
    );// user info is inside auth object

  }

  categories = [
    {
      name: 'Standard'
    },
    {
      name: 'Standard long commentations'
    },
    {
      name: 'easy'
    },
    {
      name: 'Very complicated sentence'
    },
    {
      name: 'standard'
    },
    {
      name: 'short words'
    },
    {
      name: 'idioms'
    },
    {
      name: 'Standard long commentations'
    },
    {
      name: 'my espana words'
    },
    {
      name: 'Standard'
    },
    {
      name: 'Standard long commentations'
    },
    {
      name: 'easy'
    },
    {
      name: 'Very complicated sentence'
    },
    {
      name: 'standard'
    },
    {
      name: 'short words'
    },
    {
      name: 'idioms'
    },
    {
      name: 'Standard long commentations'
    },
    {
      name: 'my espana words'
    },
  ];
}
