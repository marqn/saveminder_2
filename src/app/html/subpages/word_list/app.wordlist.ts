import {Component} from "@angular/core";
import {DataServices} from "../../../DataService";
import {ActivatedRoute} from "@angular/router";
import {WordVO} from "./WordVO";

declare var Materialize:any;

@Component({
  selector: 'wordlist',
  templateUrl: './app.wordlist.html'
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

  clicked(event) {


    // Materialize.modalActions.subscribe().emit({action:"modal1",params:['open']});


    console.log(event);
  }

}
