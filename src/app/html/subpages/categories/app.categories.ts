import {Component} from "@angular/core";
import {CategoriesDataServices} from "./CategoriesDataService";
import {CategoryVO} from "./CategoryVO";

@Component({
  selector: 'app-categories',
  templateUrl: './app.categories.html'
})

export class CategoriesComponent {

  categories;

  constructor(
    private categoriesDataServices:CategoriesDataServices
  ){}

  ngOnInit() {
    this.categoriesDataServices.getCategories().subscribe(
      categories => {
        this.categories = categories;
      }
    );
  }

}
