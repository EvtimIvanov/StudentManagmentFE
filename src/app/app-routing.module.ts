import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from './authenticated.guard';
import { CoursePageComponent } from './course-page/course-page/course-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './registration/register/register.component';
import { UserPageComponent } from './user-page/user-page/user-page.component';

const routes: Routes = [
  {path:"register",
  component:RegisterComponent},
  {
    path: 'course/:courseName',
    component: CoursePageComponent,
    canActivate: [AuthenticatedGuard]
},
{
  path:'user/:userEmail',
  component: UserPageComponent,
},

  {
    path:"login",
  component:LoginComponent
  },
  {path:"home",component:DashboardComponent,canActivate: [AuthenticatedGuard]},
  {path:"page",component:CoursePageComponent,canActivate: [AuthenticatedGuard]},
  {path:"user",component:UserPageComponent,canActivate: [AuthenticatedGuard]},
  {path:"**",redirectTo:"/login"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
