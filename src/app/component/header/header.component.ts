import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/common/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

categoies:Category[]=[];
constructor(private categoryService:CategoryService){}
  ngOnInit(): void {
    this.listCategory();
  }
  listCategory() {
    this.categoryService.getCategory().subscribe(
      data=>this.categoies=data
    )
  }

}
