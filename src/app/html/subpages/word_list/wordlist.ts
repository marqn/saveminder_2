import {Component} from "@angular/core";
import {DataServices} from "../../../dataService";
import {ActivatedRoute} from "@angular/router";
import {WordVO} from "./WordVO";

declare var Materialize:any;

@Component({
  selector: 'wordlist',
  templateUrl: './wordlist.html'
})

export class Wordlist {

  words:WordVO;
  keyId:string;

  constructor(
    private route:ActivatedRoute,
    public dataServices:DataServices
  ) {}

  ngOnInit() {

    this.keyId = this.route.snapshot.params['id'];

    this.dataServices.getWords(this.keyId).subscribe(
      words => {
        this.words = words.reverse();
      }
    );
  }

  onEdit(word) {
    console.log(word);
  }

  onDelete(word) {
    this.dataServices.deleteWord(this.keyId, word.$key);
    Materialize.toast('Delete word: ' + word.first + ' / ' + word.second, 4000);
  }

}
