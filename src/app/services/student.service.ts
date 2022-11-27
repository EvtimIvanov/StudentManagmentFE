import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { courseTeacher } from '../models/courseTeacher';
import { TokenStorageService } from './token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient,
              private token: TokenStorageService) { }

  getAll():Observable<Array<courseTeacher>>{
    return this.http.get<Array<courseTeacher>>('http://localhost:8080/courses/showCoursesWithTeachers');
  }

  getAverageGrade():Observable<number>{
      return this.http.get<number>('http://localhost:8080/student/averageGrade/'+this.token.getEmailFromToken());
  }
}
