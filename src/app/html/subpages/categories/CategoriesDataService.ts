import {CATEGORIES} from "../../mocks";
import {Injectable} from "@angular/core";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {CategoryVO} from "./CategoryVO";

@Injectable()
export class CategoriesDataServices {

  afire:AngularFire;
  uid:string;

  constructor(af:AngularFire)
  {
    this.afire = af;

    af.auth.subscribe( // user info is inside auth object
      auth => {
        console.log(auth.uid);
        this.uid = auth.uid
      }
    );
  }

  getCategories() {
    return this.afire.database.list('users/' + this.uid + '/categories');
  }
}
