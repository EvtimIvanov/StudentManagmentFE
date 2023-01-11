import { Component, OnInit } from '@angular/core';
import { courseTeacher } from '../models/courseTeacher';
import { Teacher } from '../models/teacher';
import { courseGrade } from '../models/courseAverageGrade';
import { CourseService } from '../services/course.service';
import { StudentService } from '../services/student.service';
import { TokenStorageService } from '../services/token-storage.service';
import { UserRoleService } from '../services/user-role.service';
import { courseTeacherGrade } from '../models/courseTeacherGrade';
import { Router } from '@angular/router';
import { UserInfo } from '../models/userModel';
import { UserService } from '../services/user.service';
import { Student } from '../models/student';
import { createCourseData } from '../models/createCourseData';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: courseTeacher[] = []
  grade!: number;
  role!: string;
  courseGrade: courseGrade[] = [];
  courseTeacherGrade: courseTeacherGrade[] = [];
  user!: UserInfo;
  createCourseData:createCourseData={
    courseId:0,
    courseName:'',
    totalHours:0,
    teacherId:0

  }
  constructor(private studentService: StudentService,
              private userRoleService: UserRoleService,
              private courseService: CourseService,
              private userService: UserService,
              private tokenService: TokenStorageService,
              private router: Router) { }

   ngOnInit():void {
     this.loadRole();

    console.log(this.role)
    

    this.studentService.getAverageGrade()
      .subscribe(res => this.grade = <number>res)
    
      this.studentService.getAll()
      .subscribe((res: courseTeacher[]) => {this.data = res;
                console.log(this.data)})
    
     
    this.courseService.getAllTeacherCourses()
    .subscribe((res:courseGrade[]) => {this.courseGrade = res})

    this.courseService.getAllCoursesTeacherGrade()
      .subscribe((res:courseTeacherGrade[])=>
      {this.courseTeacherGrade=res;console.log(this.courseTeacherGrade)})

    this.userService.getUserInfo(this.tokenService.getEmailFromToken()).subscribe((res:UserInfo) => this.user=res)
  }

  async loadRole(){
    await this.userRoleService.getRole().subscribe(
      res => this.role = <string>res
    );
  }
  sendToCourse(event: Event){
    let courseName = (event.target as HTMLTableColElement).innerText
    
  }
  changeToStudent() {
    
    let name = (document.getElementById("student-name") as HTMLInputElement).value
    let studentEmail = (document.getElementById("student-email") as HTMLInputElement).value
    let age = parseInt((document.getElementById("student-age") as HTMLInputElement).value)
    this.userService.changeToStudent(studentEmail, name, age).subscribe(
      (res)=>{}
    )

  }

  changeToTeacher() {
    let name = (document.getElementById("teacher-name") as HTMLInputElement).value
    let teacherEmail = (document.getElementById("teacher-email") as HTMLInputElement).value
    let degree = (document.getElementById("teacher-degree") as HTMLInputElement).value
    this.userService.changeToTeacher(teacherEmail, name, degree).subscribe(
      (res)=>{}
    )
  }

  createCourse(){
    console.log(this.createCourseData.courseName)
    this.courseService.createCourse(this.createCourseData).subscribe((data)=>{window.location.reload()})
  }

}


