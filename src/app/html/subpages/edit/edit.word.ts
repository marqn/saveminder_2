import {Component} from "@angular/core";
import {DataServices} from "../../../dataService";
import {WordVO} from "../word_list/WordVO";
import {ActivatedRoute, Router} from "@angular/router";

declare var Materialize:any;

@Component ({
  selector: 'edit-word',
    templateUrl: './edit.word.html'
})

export class EditWordComponent {
  update:boolean;
  first:string;
  second:string;
  optional:string;
  categoryKey:string;
  wordKey:string;

  ngOnInit() {
    this.wordKey = this.route.snapshot.params['wordId'];
    this.categoryKey = this.route.snapshot.params['categoryId'];

    if (this.route.snapshot.params['mode'] == 'new') {
      this.update = false;
    }
    else if (this.route.snapshot.params['mode'] == 'update') {
      this.update = true;
    }

    this.dataServices.getWord(this.categoryKey, this.wordKey).subscribe(
      word => {
        this.first = word.first;
        this.second = word.second;
        this.optional = word.optional;
      }
    );

  }

  constructor(
    private dataServices:DataServices,
    private router:Router,
    private route:ActivatedRoute
  ) {}

  onSave() {

    var wordVO:WordVO = new WordVO();
    wordVO.first = this.first;
    wordVO.second = this.second;
    wordVO.optional = this.optional;
    if(wordVO.optional == undefined) {
      wordVO.optional = '';
    }

    if(!this.update) {
      wordVO.data_added = Date.now();
      wordVO.refresh = 0;
      wordVO.win = 0;
      wordVO.lost = 0;
      wordVO.elapsedTime = 0;
    }


    if (wordVO.first != '' && wordVO.second != '') {
      this.dataServices.saveWord(this.categoryKey, wordVO)
        .then(_ => {
          this.router.navigate(['#/wordlist', {id: this.categoryKey}]);
          Materialize.toast('Word saved', 4000);
        });
    }
  }
}
