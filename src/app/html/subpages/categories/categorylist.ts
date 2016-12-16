import {Component} from "@angular/core";
import {DataServices} from "./../../../DataService";
import {CategoryVO} from "./CategoryVO";

@Component({
  selector: 'app-categories',
  templateUrl: './categorylist.html'
})

export class CategoryListComponent {

  categories:CategoryVO[];

  constructor(
    private dataServices:DataServices
  ){}

  ngOnInit() {
    this.dataServices.getCategories().subscribe(
      categories => {
        this.categories = categories;
      }
    );
  }

  onDelete(categoryObj) {
    console.log(categoryObj.$key);
  }

}
