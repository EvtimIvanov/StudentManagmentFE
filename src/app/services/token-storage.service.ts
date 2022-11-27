import { Injectable } from '@angular/core';

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
    return atob(this.getToken()).split(":")[0];
  }


}
