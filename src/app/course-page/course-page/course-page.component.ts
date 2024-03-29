import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { createCourseData } from 'src/app/models/createCourseData';
import { addGradeToStudentData } from 'src/app/models/addGradeToStudentData';
import { addStudentData } from 'src/app/models/addStudent';
import { courseInfo, studentsWithGrades } from 'src/app/models/courseInfo';
import { CourseService } from 'src/app/services/course.service';
import { UserRoleService } from 'src/app/services/user-role.service';
import { UserService } from 'src/app/services/user.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserInfo } from 'src/app/models/userModel';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {

  course?: string ;
  courseInfo!: courseInfo;
  user!: UserInfo;
  
  students: studentsWithGrades[]=[];
  role!: string;
  toAddStudentData: addStudentData={
    courseId: 0,
    studentId: 0
  };
  addGradeToStudentData:addGradeToStudentData={
    courseId: 0,
    studentId: 0,
    grade: 0

  }

  addGradeFail: boolean = false;

  createCourseData:createCourseData={
    courseId:0,
    courseName:'',
    totalHours:0,
    teacherId:0
  }

  constructor(public route: ActivatedRoute,
              private courseService: CourseService,
              private userService: UserService,
              private tokenService: TokenStorageService,
              private authService: AuthService
              ) { }

  ngOnInit(): void {
   this.course = <string>this.route.snapshot.paramMap.get('courseName');
   this.loadRole();
    
    this.courseService.getCourseInfo(this.course).subscribe(
      (res:courseInfo )=>{this.courseInfo =res;
      this.students = this.courseInfo.studentsWithGrades;
      
    })

    this.userService.getUserInfo(this.tokenService.getEmailFromToken()).subscribe((res:UserInfo) => this.user=res)

  }

  async loadRole(){
    await this.userService.getRole().subscribe(
      res => this.role = <string>res
    );
  }
  addStudent(): void{
    this.toAddStudentData.courseId = this.courseInfo.id;
    this.courseService.addStudentToCourse(this.toAddStudentData.courseId,
                                          this.toAddStudentData.studentId)
    
  }
  //TODO to add grade and to get id from the current state!!!
  addGradeToStudent(): void{
   
    this.addGradeToStudentData.courseId = this.courseInfo.id;
   // const responseData : addGradeToStudentData;
    this.courseService.addGradeToStudent(this.addGradeToStudentData).subscribe(
     
      (data)=>{window.location.reload()},
      (error)=>{this.addGradeFail=true;}
    );
      
  }

  logout() {
    this.authService.logout();
    location.reload()
  }

}
