import {Injectable} from "@angular/core";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import 'rxjs/add/operator/map';
import {CategoryVO} from "./html/subpages/categories/CategoryVO";
import {WordVO} from "./html/subpages/word_list/WordVO";

@Injectable()
export class DataServices {

  afire:AngularFire;
  uid:string;

  constructor(af:AngularFire)
  {
    this.afire = af;

    af.auth.subscribe( // user info is inside auth object
      auth => {
        this.uid = auth.uid
      }
    );
  }

  getCategories() {
    return this.afire.database.list('users/' + this.uid + '/categories')
      .map( (arr) => { return arr } ) as FirebaseListObservable<CategoryVO[]>;
  }

  getWords(categoryKey:string) {
    return this.afire.database.list('users/' + this.uid + '/words')
      .map( (arr) => { return arr } ) as FirebaseListObservable<any>;
  }
}
