import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';
import { Teacher } from '../models/teacher';
import { UserInfo } from '../models/userModel';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  changeToTeacher(studentEmail: string, teacherName: any, teacherDegree: any) {
    return this.http.post("http://localhost:8080/user/changeRole/"
                                  +studentEmail+"/Teacher", {
                                    name: teacherName,
                                    degree: teacherDegree
                                  },
                                  {responseType: 'text'});
  }
  changeToStudent(studentEmail: string, studentName: any, studentAge: any) {

    return this.http.post("http://localhost:8080/user/changeRole/"
                                  +studentEmail+"/Student", {
                                    name: studentName,
                                    age: studentAge
                                  },
                                  {responseType: 'text'});
  }

  constructor(private http: HttpClient,private token:TokenStorageService) { }

  getRole():Observable<String>{
    
    return this.http.get("http://localhost:8080/user/"
                                  +this.token.getEmailFromToken()+"/role",
                                  {responseType: 'text'});
    
  }


  getUserInfo(email:string):Observable<UserInfo>{
    return this.http.get<UserInfo>("http://localhost:8080/user/"+email);
  }
}
