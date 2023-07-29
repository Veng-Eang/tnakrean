import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-video',
  templateUrl: './course-video.component.html',
  styleUrls: ['./course-video.component.css']
})
export class CourseVideoComponent {
constructor(private router:Router,
            private route:ActivatedRoute){}
onBack(){
  this.router.navigate(['course','1','details'])
}
}
