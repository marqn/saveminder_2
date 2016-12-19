import {Component} from "@angular/core";
import {DataServices} from "./../../../DataService";
import {CategoryVO} from "./CategoryVO";
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categorylist.html'
})

export class CategoryListComponent {

  categories:CategoryVO[];

  constructor(
    private dataServices:DataServices,
    public router:Router
  ){}

  ngOnInit() {
    this.dataServices.getCategories().subscribe(
      categories => {
        this.categories = categories.reverse();
      }
    );
  }

  onDelete(categoryObj) {
    this.dataServices.deleteCategory(categoryObj.$key);
  }

}
