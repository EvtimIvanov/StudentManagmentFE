import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder,FormGroup} from '@angular/forms'
import { LoginData } from './login-data';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidCredentials = false;
  data:LoginData = {
    username: '',
    password: ''
  }


  constructor (private authService: AuthService,private router:Router,
              private token:TokenStorageService){}

  ngOnInit(): void {
    
  }

  doLogin(): void{
    
      this.authService.login(this.data.username,this.data.password)
          .subscribe({
            next: () => {this.router.navigate(['/home']);},
            error: err => {this.invalidCredentials = true}
          })
    

  }

  

}

