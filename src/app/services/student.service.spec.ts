import { TestBed } from '@angular/core/testing';
import { StudentService } from './student.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { courseTeacher } from '../models/courseTeacher';


describe('StudentService', () => {
  let studentService: StudentService ;
  let httpMock: HttpClient ;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StudentService]
    });
    httpMock =TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    studentService = TestBed.inject(StudentService)
  });

  it('should be created', () => {
    expect(studentService).toBeTruthy();
  });

  describe('#getAll', () => {
    const serviceUrl = 'http://localhost:8080/courses/showCourseWithTeachers';
  
    it('should get all teachers and courses', () => {
      let coursesWithTeacers:courseTeacher[]  = [
        {course: 'Math',teacher:'Ivan'},
        {course: 'BG', teacher: 'Kana'}
      ];
  
      studentService.getAll()
        .subscribe((responseData:courseTeacher[])=>{
          expect(responseData).toEqual(coursesWithTeacers);
        })
  
      const requestWrapper = httpTestingController.expectOne(serviceUrl);
      expect(requestWrapper.request.method).toEqual('GET');
  
      requestWrapper.flush(coursesWithTeacers);
  
      httpTestingController.verify();
  
    });
  })

  it('should get average grade',() => {
    const serviceUrl = 'http://localhost:8080/student/averageGrade/';
    const averageGrade: number = 4;

    studentService.getAverageGrade()
      .subscribe(res=>{
        expect(res).toEqual(averageGrade);
      })

      const requestWrapper = httpTestingController.expectOne(serviceUrl+'ée');

      expect(requestWrapper.request.method).toEqual('GET');

      requestWrapper.flush(averageGrade);
      httpTestingController.verify()

  })


});


