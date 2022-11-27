import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInfo } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  userEmail: string = ''
  userInfo: UserInfo={
    id:0,
    email:'',
    userName:'',
    role:''
  }
  constructor(private route: ActivatedRoute,
           private userService: UserService) { }

  ngOnInit(): void {
    this.userEmail = <string>this.route.snapshot.paramMap.get('userEmail')
    this.loadUserInfo()

  }
  loadUserInfo(){
    
    this.userService.getUserInfo(this.userEmail).subscribe(
      res=> {
        this.userInfo = res;
      console.log(this.userInfo);
    }
    )
  }

}
