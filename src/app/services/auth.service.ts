import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { JwtToken } from '../models/token';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, 
              private tokenStorage : TokenStorageService) { }


    login(username: string, password: string){
      return this.http.post<JwtToken>("http://localhost:8080/login",{
        'username': username,
        'password': password
      }).pipe(
        map((res) => {this.tokenStorage.setToken(res.token)})
      );
    }

    register(name:string,email:string,password: string) {

      localStorage.removeItem("auth_key");

      return this.http.post("http://localhost:8080/register",{
        "name" : name,
        "email" : email,
        "password" : password
      });
     }
   
}
