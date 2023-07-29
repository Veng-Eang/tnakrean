import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Instructor } from 'src/app/common/instructor';

@Component({
  selector: 'app-live-stream',
  templateUrl: './live-stream.component.html',
  styleUrls: ['./live-stream.component.css']
})
export class LiveStreamComponent {
  instructors:Instructor[]=[
    new Instructor("1","Cookery Coach","../../../../assets/images/left-imgs/img-1.jpg","Wordpress & Plugin Tutor",19,102),
    new Instructor("1","Jose Portilla","../../../../assets/images/left-imgs/img-2.jpg","Head of Data Science, Pierian Data Inc.",19,102),
    new Instructor("1","Cookery Coach","../../../../assets/images/left-imgs/img-3.jpg","Wordpress & Plugin Tutor",19,102),
    new Instructor("1","Cookery Coach","../../../../assets/images/left-imgs/img-4.jpg","Wordpress & Plugin Tutor",19,102),
    new Instructor("1","Cookery Coach","../../../../assets/images/left-imgs/img-5.jpg","Wordpress & Plugin Tutor",19,102),
    new Instructor("1","Cookery Coach","../../../../assets/images/left-imgs/img-6.jpg","Wordpress & Plugin Tutor",19,102),
    new Instructor("1","Cookery Coach","../../../../assets/images/left-imgs/img-7.jpg","Wordpress & Plugin Tutor",19,102),
  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 4
      },
      760: {
        items: 6
      },
      1000: {
        items: 8
      }
    },
    nav: true
  }
}
