import { CourseService } from 'src/app/services/course.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/common/course';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  currentCategoryId:number=1;
  courses:Course[]=[];
  length:number = 0;
  pageSize:number = 3;
  pageIndex:number = 0;
  pageSizeOptions:number[] = [3, 6, 9];

  hidePageSize:boolean = false;
  showPageSizeOptions:boolean = true;
  showFirstLastButtons:boolean = true;
  disabled:boolean = false;
  pageEvent!: PageEvent;



  constructor(private courseService:CourseService,
              private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.listCourse();
    }
    )

  }
  listCourse() {
    const hasKey=this.route.snapshot.paramMap.has("id");
    if(hasKey){
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    }
    this.courseService.getCoursesByCategoryPagination(this.currentCategoryId,
                                                      this.pageIndex+1,
                                                      this.pageSize).subscribe(
                                                        data=>{
                                                          this.courses=data.content
                                                          this.pageIndex=data.pagination.pageNumber-1
                                                          this.pageSize=data.pagination.pageSize
                                                          // this.totalPage=data.pagination.totalPages
                                                          this.length=data.pagination.totalElements
                                                          console.log(this.length)
                                                          console.log(data.pagination.totalElements)
                                                        }

                                                      )
  }
  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.listCourse()
  }
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
}
