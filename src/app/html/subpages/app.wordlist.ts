import {Component} from "@angular/core";

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
