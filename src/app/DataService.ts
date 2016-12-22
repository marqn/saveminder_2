import {Injectable} from "@angular/core";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import "rxjs/add/operator/map";
import {CategoryVO} from "./html/subpages/category_list/CategoryVO";
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
    return this.afire.database.object('users/' + this.uid + '/categories/' + key);
  }

  saveCategory(_categoryName:string) {
    const item = this.afire.database.list('users/' + this.uid + '/categories');
    return item.push({categoryName: _categoryName})
      .catch(err => console.log(err, 'You do not have access!'));
  }

  updateCategory(key:string, newName:string) {
    const itemObservable = this.afire.database.object('users/' + this.uid + '/categories/' + key);
    return itemObservable.update({ categoryName: newName });
  }

  deleteCategory(key:string) {
    const items = this.afire.database.list('users/' + this.uid + '/categories/' + key);
    items.remove();
  }

//*********************************************** Words Operation ******************************************************
  getWords(categoryKey:string) {
    return this.afire.database.list('users/' + this.uid + '/categories/' + categoryKey +'/words/')
      .map((arr) => {
        return arr
      }) as FirebaseListObservable<any>;
  }
  
  getWord(categoryKey:string, wordKey:string) {
    return this.afire.database.object('users/' + this.uid + '/categories/' + categoryKey + '/words/' + wordKey);
  }

  saveWord(categoryKey:string, word:WordVO) {
    console.log(word);
    const item = this.afire.database.list('users/' + this.uid + '/categories/' + categoryKey +'/words');
    return item.push(word)
      .catch(err => console.log(err, 'You do not have access!'));
  }

  deleteWord(categoryKey:string, wordKey:string) {
    const items = this.afire.database.list('users/' + this.uid + '/categories/' + categoryKey + '/words/' + wordKey);
    items.remove();
  }

  editWord(categoryKey:string, wordKey:string, word:WordVO) {
    const itemObservable = this.afire.database.object('users/' + this.uid + '/categories/' + categoryKey + '/words/' + wordKey);
    return itemObservable.update({ first: word.first, second: word.second, oprional: word.optional });
  }

}
