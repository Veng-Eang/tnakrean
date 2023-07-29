import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { StudentsSay } from 'src/app/common/students-say';

@Component({
  selector: 'app-students-say',
  templateUrl: './students-say.component.html',
  styleUrls: ['./students-say.component.css']
})
export class StudentsSayComponent {
  studentsSay:StudentsSay[]=[
    new StudentsSay("Rock Smith","../../../../assets/images/left-imgs/img-1.jpg","Cras id enim lectus. Fusce at arcu tincidunt, iaculis libero quis, vulputate mauris. Morbi facilisis vitae ligula id aliquam. Nunc consectetur malesuada bibendum."),
    new StudentsSay("Luoci Marchant","../../../../assets/images/left-imgs/img-2.jpg","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos eros ac, sagittis orci."),
    new StudentsSay("Davinder Singh","../../../../assets/images/left-imgs/img-3.jpg","Cras id enim lectus. Fusce at arcu tincidunt, iaculis libero quis, vulputate mauris. Morbi facilisis vitae ligula id aliquam. Nunc consectetur malesuada bibendum."),
    new StudentsSay("Rock Smith","../../../../assets/images/left-imgs/img-4.jpg","Nulla bibendum lectus pharetra, tempus eros ac, sagittis orci. Suspendisse posuere dolor neque, at finibus mauris lobortis in.  Pellentesque vitae laoreet tortor."),
    new StudentsSay("Luoci Marchant","../../../../assets/images/left-imgs/img-5.jpg","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos eros ac, sagittis orci."),
    new StudentsSay("Davinder Singh","../../../../assets/images/left-imgs/img-6.jpg","Cras id enim lectus. Fusce at arcu tincidunt, iaculis libero quis, vulputate mauris. Morbi facilisis vitae ligula id aliquam. Nunc consectetur malesuada bibendum."),
    new StudentsSay("Rock Smith","../../../../assets/images/left-imgs/img-7.jpg","Cras id enim lectus. Fusce at arcu tincidunt, iaculis libero quis, vulputate mauris. Morbi facilisis vitae ligula id aliquam. Nunc consectetur malesuada bibendum."),
    new StudentsSay("Rock Smith","../../../../assets/images/left-imgs/img-8.jpg","Cras id enim lectus. Fusce at arcu tincidunt, iaculis libero quis, vulputate mauris. Morbi facilisis vitae ligula id aliquam. Nunc consectetur malesuada bibendum."),
    new StudentsSay("Davinder Singh","../../../../assets/images/left-imgs/img-9.jpg","Cras id enim lectus. Fusce at arcu tincidunt, iaculis libero quis, vulputate mauris. Morbi facilisis vitae ligula id aliquam. Nunc consectetur malesuada bibendum."),
  ]

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: false,
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
}
