import {Component} from "@angular/core";
import {DataServices} from "../../../DataService";
import {WordVO} from "./WordVO";

@Component({
  selector: 'wordlist',
  templateUrl: './app.wordlist.html'
})

export class Wordlist {

  words:WordVO;
  
  constructor(
    public dataServices:DataServices
  ) {}
  
  ngOnInit() {
    this.dataServices.getWords('lala').subscribe(
      words => {
        this.words = words;
      }
    );
  }
  
  clicked(event) {
    console.log(event.srcElement.firstChild);
    event.preventDefault();
  }
}
