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
  keyId:string;


  constructor(private route:ActivatedRoute,
              public dataServices:DataServices) {
  }

  ngOnInit() {

    this.keyId = this.route.snapshot.params['id'];

    if (this.route.snapshot.params['mode'] == 'new') {
      this.update = false;
    }
    else if (this.route.snapshot.params['mode'] == 'update') {
      this.update = true;
    }

    this.dataServices.getCategory(this.keyId).subscribe(
        categories => {
        this.category = categories.categoryName;
      }
    );


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
    if (this.category != '') {
      this.dataServices.updateCategory(this.keyId, this.category)
        .then(_ => {
          console.log('update success Yeah');
        });
      // show toast
    }
  }
}
