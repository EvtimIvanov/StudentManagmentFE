import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { TokenInterceptor } from './token.interceptor';
import { RegisterComponent } from './registration/register/register.component';
import { CoursePageComponent } from './course-page/course-page/course-page.component';
import { gradeToLetter } from './course-page/course-page/gradePipe';
import { CourseTeacherDetailsComponent } from './details/course-teacher-details/course-teacher-details.component';
import { AveragePrefixPipe } from './course-page/course-page/averagePrefixPipe';
import { UserPageComponent } from './user-page/user-page/user-page.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    CoursePageComponent,
    CourseTeacherDetailsComponent,
    gradeToLetter,
    AveragePrefixPipe,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
