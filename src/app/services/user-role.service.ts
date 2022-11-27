import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  constructor(private http: HttpClient,private token:TokenStorageService) { }


  getRole():Observable<String>{
    
    return this.http.get("http://localhost:8080/user/role/"
                                  +this.token.getEmailFromToken(),
                                  {responseType: 'text'});
    
  }

}
