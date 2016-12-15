import {Component} from "@angular/core";
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import {DataServices} from "../../../DataService";

@Component({
  selector: 'edit-component',
  templateUrl: './app.edit.html'
})

export class EditComponent {

  categoryMode:boolean;
  wordMode:boolean;
  category:string;

  constructor(
    private route: ActivatedRoute,
    public dataServices:DataServices
  ) { }

  ngOnInit() {

    if(this.route.snapshot.params['page'] == 'category')
    {
      this.categoryMode = true;
      this.wordMode = false;
    }
    else if(this.route.snapshot.params['page'] == 'word')
    {
      this.categoryMode = false;
      this.wordMode = true;
    }
  }

  onSave() {
    if(this.categoryMode) {

      if(this.category != '') {
        this.dataServices.saveCategory(this.category)
          .then(_ => {
            this.category = '';
            console.log('success Yeah');
          });
        // show toast
      }
    }
  }
}
