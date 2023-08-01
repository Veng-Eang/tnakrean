import { Component } from '@angular/core';
import { Category } from 'src/app/common/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  categories:Category[]=[];

  constructor(private categoryService:CategoryService){}
  onShowCategory(){
    this.categoryService.getCategory().subscribe(
      data=>this.categories=data
    )
  }
}
