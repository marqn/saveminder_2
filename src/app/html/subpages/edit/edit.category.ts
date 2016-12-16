import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {DataServices} from "../../../DataService";
import {CategoryVO} from "../categories/CategoryVO";

@Component({
  selector: 'edit-component',
  templateUrl: './edit.category.html'
})

export class EditCategoryComponent {

  update:boolean;
  category:string;

  categoryVO;

  constructor(private route:ActivatedRoute,
              public dataServices:DataServices) {
  }

  ngOnInit() {

    this.category = this.route.snapshot.params['obj'];

    if (this.route.snapshot.params['mode'] == 'new') {
      this.update = false;
    }
    else if (this.route.snapshot.params['mode'] == 'update') {
      this.update = true;
    }

    console.log("update:" + this.update);
  }

  onSave() {

    if (this.category != '') {
      this.dataServices.saveCategory(this.category)
        .then(_ => {
          this.category = '';
          console.log('success Yeah');
        });
      // show toast
    }
  }

  onUpdate() {
    if (this.category = '') {

    }
  }
}
