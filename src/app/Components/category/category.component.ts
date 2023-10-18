import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories : Category[]=[];
  currentCategory: Category | null;
  allCategoryClicked: boolean = false;

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.setCurrentCategory(null);
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(response=>{
      this.categories = response.data
    })
  }
  setCurrentCategory(category:Category | null){
    this.currentCategory = category;
    this.allCategoryClicked = false;
  }

  getCurrentCategoryClass(category:Category){
    if(category === this.currentCategory){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  getAllCategoryClass(){
       if(this.currentCategory === null && !this.allCategoryClicked){
        return "list-group-item active"
       }
       else{
        return "list-group-item"
       }
  }
}
