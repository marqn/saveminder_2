import {Component} from "@angular/core";
import {CategoriesDataServices} from "./CategoriesDataService";

@Component({
  selector: 'app-categories',
  templateUrl: './app.categories.html'
})

export class CategoriesComponent {

  categories;

  constructor(private categoriesDataServices:CategoriesDataServices) {
    
  }

  ngOnInit() {
    console.log(this.categoriesDataServices.getCategories());
    this.categories = this.categoriesDataServices.getCategories();
  }

}
