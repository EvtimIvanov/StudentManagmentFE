import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { decodedToken } from '../models/decodedToken';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  private readonly AUTH_TOKEN_KEY: string = "auth_key";

  constructor() { }

  setToken(token: string): void {
    localStorage.setItem(this.AUTH_TOKEN_KEY,token);
  }

  getToken(): string  {
    return <string>localStorage.getItem(this.AUTH_TOKEN_KEY);
  }

  hasToken(): boolean {
    return this.getToken() !== null;
  }

  getEmailFromToken(): string{
    return jwt_decode<decodedToken>(this.getToken()).email;
  }


}
