import { ProfileComponent } from './component/profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CourseDetialComponent } from './component/course-detial/course-detial.component';
import { ContentComponent } from './component/content/content.component';
import { CourseVideoComponent } from './component/course-video/course-video.component';
import { MyProfileComponent } from './component/my-profile/my-profile.component';
import { TestComponent } from './component/test/test.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:ContentComponent},
  {path:'course/:id/details',component:CourseDetialComponent},
  {path:'course/1/videos',component:CourseVideoComponent},
  {path:'profile',component:ProfileComponent},
  {path:'my-profile',component:MyProfileComponent},
  {path:'test',component:TestComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{
      scrollPositionRestoration: 'enabled', // Router Scroll Position Restoration
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
