import {Component} from "@angular/core";
import {CategoriesDataServices} from "./../../../DataService";
import {CategoryVO} from "./CategoryVO";

@Component({
  selector: 'app-categories',
  templateUrl: './app.categories.html'
})

export class CategoriesComponent {

  categories:CategoryVO[];

  constructor(
    private categoriesDataServices:CategoriesDataServices
  ){}

  ngOnInit() {
    this.categoriesDataServices.getCategories().subscribe(
      categories => {
        this.categories = categories;
        console.log(categories);
      }
    );
  }

}
