import {Component} from "@angular/core";
import {DataServices} from "../../../DataService";
import {WordVO} from "../word_list/WordVO";
import {ActivatedRoute, Router} from "@angular/router";

@Component ({
  selector: 'edit-word',
    templateUrl: './edit.word.html'
})

export class EditWordComponent {
  update:boolean;
  first:string;
  second:string;
  optional:string;
  keyId:string;

  ngOnInit() {
    this.keyId = this.route.snapshot.params['id'];
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
    wordVO.data_added = Date.now();
    wordVO.refresh = 0;
    wordVO.win = 0;
    wordVO.lost = 0;
    wordVO.elapsedTime = 0;


    if (wordVO.first != '' && wordVO.second != '') {
      this.dataServices.saveWord(this.keyId, wordVO)
        .then(_ => {
          this.router.navigate(['#/wordlist', {id: this.keyId}]);
          console.log('save success');
          // show toast
        });
    }
  }

  onUpdate() {

  }
}
