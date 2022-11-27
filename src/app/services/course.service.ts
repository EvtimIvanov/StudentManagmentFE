import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { addGradeToStudentData } from '../models/addGradeToStudentData';
import { courseGrade } from '../models/courseAverageGrade';
import { courseInfo } from '../models/courseInfo';
import { courseTeacherGrade } from '../models/courseTeacherGrade';
import { createCourseData } from '../models/createCourseData';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient, private token: TokenStorageService) { }
  

  public getAllTeacherCourses():Observable<Array<courseGrade>> {
    return this.http.get<Array<courseGrade>>("http://localhost:8080/courses/teacher/"+
                          this.token.getEmailFromToken()+"/coursesWithAverageGrade");

  }

  public getAllCoursesTeacherGrade():Observable<Array<courseTeacherGrade>>{
    return this.http.get<Array<courseTeacherGrade>>("http://localhost:8080/courses");
  }

  public getCourseInfo(courseName: string):Observable<courseInfo>{
      return this.http.get<courseInfo>("http://localhost:8080/courses/"+courseName);
  }

  addStudentToCourse(courseId: number, studentId: number):void {
  
    this.http.post("http://localhost:8080/courses/addStudentToCourse",{
      studentId: studentId,
      courseId: courseId
    },{
      observe: 'response'
    }).subscribe()
  }

  addGradeToStudent(addGradeToStudentData: addGradeToStudentData): Observable<addGradeToStudentData> {
    const courseId = addGradeToStudentData.courseId;
    const studentId = addGradeToStudentData.studentId;
    const grade = addGradeToStudentData.grade;
    return this.http.post<addGradeToStudentData>(`http://localhost:8080/courses/${courseId}/student/${studentId}/addGrade/${grade}`,{
      observe: 'response'
    });
    
  }
  createCourse(createCourseData:createCourseData){
    const courseId = createCourseData.courseId;
    const courseName = createCourseData.courseName;
    const totalHours = createCourseData.totalHours;
    console.log("call");
    return this.http.post("http://localhost:8080/courses",
    {courseId,
      courseName,
      totalHours
    },{
      observe: 'response'
    })

  }
}
