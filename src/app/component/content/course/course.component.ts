import { CourseService } from 'src/app/services/course.service';
import {SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/common/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses:Course[] = []
  constructor(private courseService : CourseService){}
  activeSlides?: SlidesOutputData;
  day:number=0;
  toDate=new Date('yyyy-MM-dd');

  ngOnInit(): void {
      this.courseService.getAllCourse().subscribe(
        data=>{
          this.courses=data;
        }
      )
  }
  


  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }




  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }
  startDragging(event:boolean){
    console.log(event);
  }
}
