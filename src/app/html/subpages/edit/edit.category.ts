import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {DataServices} from "../../../dataService";

declare var Materialize:any;

@Component({
  selector: 'edit-component',
  templateUrl: './edit.category.html'
})

export class EditCategoryComponent {

  update:boolean;
  category:string;
  keyId:string;

  saveToastMessage:string = "Add new category";
  updateToastMessage:string = "Update category: ";
  toastDelay:number = 4000;


  constructor(
    private route:ActivatedRoute,
    private router:Router,
    public dataServices:DataServices
  ) {}

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
          this.router.navigate(['#/category-list']);
          Materialize.toast(this.saveToastMessage, this.toastDelay);
        });
    }
  }

  onUpdate() {
    if (this.category != '') {
      this.dataServices.updateCategory(this.keyId, this.category)
        .then(_ => {
          this.router.navigate(['#/category-list']);
          Materialize.toast(this.updateToastMessage + this.category, this.toastDelay);
        });
    }
  }
}
