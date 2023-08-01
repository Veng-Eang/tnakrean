import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { ContentComponent } from './component/content/content.component';
import { FooterComponent } from './component/footer/footer.component';
import { CourseComponent } from './component/content/course/course.component';
import { InstructorComponent } from './component/content/instructor/instructor.component';
import { StudentsSayComponent } from './component/content/students-say/students-say.component';
import { LiveStreamComponent } from './component/content/live-stream/live-stream.component';
import { RightContentComponent } from './component/content/right-content/right-content.component';
import { CourseDetialComponent } from './component/course-detial/course-detial.component';
import { CourseVideoComponent } from './component/course-video/course-video.component';
import { ProfileComponent } from './component/profile/profile.component';
import { MyProfileComponent } from './component/my-profile/my-profile.component';
import { TestComponent } from './component/test/test.component';
import { CourseService } from './services/course.service';
import { CourseCurriculumComponent } from './component/content/course-curriculum/course-curriculum.component';
import { CategoryService } from './services/category.service';
import { CategoryComponent } from './component/category/category.component';
import { ExploreComponent } from './component/explore/explore.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent,
    CourseComponent,
    InstructorComponent,
    StudentsSayComponent,
    LiveStreamComponent,
    RightContentComponent,
    CourseDetialComponent,
    CourseVideoComponent,
    ProfileComponent,
    MyProfileComponent,
    TestComponent,
    CourseCurriculumComponent,
    CategoryComponent,
    ExploreComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    FontAwesomeModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [CourseService,CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
