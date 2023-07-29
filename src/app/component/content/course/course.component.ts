import {SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';
import { Component } from '@angular/core';
import { Course } from 'src/app/common/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  activeSlides?: SlidesOutputData;
  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }


  courses:Course[] = [
    new Course("1","The Complete Front-End Web Development Course!","../../../../assets/images/courses/img-1.jpg",10,3.5,"best seller",110,"01/12/2022",10),
    new Course("1","The Complete Front-End Web Development Course!","../../../../assets/images/courses/img-1.jpg",10,3.5,"best seller",110,"01/12/2022",10),
    new Course("1","The Complete Front-End Web Development Course!","../../../../assets/images/courses/img-1.jpg",10,3.5,"best seller",110,"01/12/2022",10),
    new Course("1","The Complete Front-End Web Development Course!","../../../../assets/images/courses/img-1.jpg",10,3.5,"best seller",110,"01/12/2022",10),
    new Course("1","The Complete Front-End Web Development Course!","../../../../assets/images/courses/img-1.jpg",10,3.5,"best seller",110,"01/12/2022",10),
    new Course("1","The Complete Front-End Web Development Course!","../../../../assets/images/courses/img-1.jpg",10,3.5,"best seller",110,"01/12/2022",10),
    new Course("1","The Complete Front-End Web Development Course!","../../../../assets/images/courses/img-1.jpg",10,3.5,"best seller",110,"01/12/2022",10),
    new Course("1","The Complete Front-End Web Development Course!","../../../../assets/images/courses/img-1.jpg",10,3.5,"best seller",110,"01/12/2022",10),
  ]
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
