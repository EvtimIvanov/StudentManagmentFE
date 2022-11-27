import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { registerData } from './register-data';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  data: registerData = {
    name : '',
    password : '',
    email : ''
  }

  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  doRegister(): void{
    
    this.authService.register(this.data.name,this.data.email, this.data.password)
    .subscribe({
      next: () => {this.router.navigate(['/login'])},
      //error: err => this.invalidCredentials = true
    });



  }


}
