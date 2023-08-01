import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/common/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-detial',
  templateUrl: './course-detial.component.html',
  styleUrls: ['./course-detial.component.css']
})
export class CourseDetialComponent implements OnInit{
a:number=0;
b:number=1;

course?:Course;
constructor(private courseService:CourseService,
            private route:ActivatedRoute){}
ngOnInit(): void {
  this.handleCourse();
}

handleCourse(){
  const id=+this.route.snapshot.paramMap.get('id')!;
  this.courseService.getCourseById(id).subscribe(
    data=>{
      this.course=data;
      console.log(this.course)
    }
  )
}

}
