import {Component} from "@angular/core";
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'wordlist',
  templateUrl: './app.wordlist.html'
})

export class Wordlist {
  words = [
    {
      first: 'lala',
      second: 'okoko'
    }, {
      first: 'lala',
      second: 'okoko'
    }, {
      first: 'lala',
      second: 'okoko'
    }, {
      first: 'lala',
      second: 'okoko'
    }, {
      first: 'lala',
      second: 'okoko'
    }, {
      first: 'lala',
      second: 'okoko'
    }, {
      first: 'lala',
      second: 'okoko'
    }, {
      first: 'lala',
      second: 'okoko'
    }, {
      first: 'lala',
      second: 'okoko'
    }, {
      first: 'lala',
      second: 'okoko'
    }, {
      first: 'lala',
      second: 'okoko'
    }, {
      first: 'lala',
      second: 'okoko'
    }, {
      first: 'lala',
      second: 'okoko'
    }, {
      first: 'lala',
      second: 'okoko'
    }, {
      first: 'lala',
      second: 'okoko'
    }, {
      first: 'lala',
      second: 'okoko'
    },
  ]

  clciked(event) {
    console.log(event.srcElement.firstChild);
    event.preventDefault();
  }
}
