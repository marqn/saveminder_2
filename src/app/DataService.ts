import {Injectable} from "@angular/core";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import "rxjs/add/operator/map";
import {CategoryVO} from "./html/subpages/categories/CategoryVO";
import {WordVO} from "./html/subpages/word_list/WordVO";

@Injectable()
export class DataServices {

  afire:AngularFire;
  uid:string;

  constructor(af:AngularFire) {
    this.afire = af;

    af.auth.subscribe( // user info is inside auth object
      auth => {
        this.uid = auth.uid
      }
    );
  }

// ********************************************* Categories Operation **************************************************
  getCategories() {
    return this.afire.database.list('users/' + this.uid + '/categories')
      .map((arr) => {
        return arr
      }) as FirebaseListObservable<any>;
  }

  getCategory(key:string) {

  }

  saveCategory(_categoryName:string) {
    const item = this.afire.database.list('users/' + this.uid + '/categories');
    return item.push({categoryName: _categoryName})
      .catch(err => console.log(err, 'You do not have access!'));
  }

  editCategory(categoryKey:string) {

  }

//*********************************************** Words Operation ******************************************************
  getWords(categoryKey:string) {
    return this.afire.database.list('users/' + this.uid + '/words')
      .map((arr) => {
        return arr
      }) as FirebaseListObservable<any>;
  }

  saveWord(categoryKey:string, word:WordVO) {

  }

  editWord(word:WordVO) {

  }

}
