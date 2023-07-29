import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CourseDetialComponent } from './component/course-detial/course-detial.component';
import { ContentComponent } from './component/content/content.component';
import { CourseVideoComponent } from './component/course-video/course-video.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:ContentComponent},
  {path:'course/1/details',component:CourseDetialComponent},
  {path:'course/1/videos',component:CourseVideoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
