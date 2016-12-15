import {Component} from "@angular/core";
import {DataServices} from "./../../../DataService";
import {CategoryVO} from "./CategoryVO";

@Component({
  selector: 'app-categories',
  templateUrl: './app.categories.html'
})

export class CategoriesComponent {

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
  
  

}
