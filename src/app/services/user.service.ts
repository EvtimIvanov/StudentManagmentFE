import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from '../models/userModel';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
