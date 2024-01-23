import { Component } from '@angular/core';
import { login } from '../login';
import { HttpServiceService } from '../http-service.service';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  model=new login("yatendra singh","8080");
  posts:any;
  constructor(private httpService:HttpServiceService, private router:Router, private httpService2:AdminService){}
adminlogin()
{
  this.httpService2.adminlogin(this.model).subscribe(
    (response:string)=>{this.posts=response;
      if(this.posts==="you are welcome")
      this.router.navigate(['/adminproduct']);
    else
    alert(this.posts);} 
  );
}

adminsignup()
{
  this.httpService2.adminsignup(this.model).subscribe(
    (response:string)=>{this.posts=response;
      alert(this.posts);
}
  );
}

userlogin()
{
this.httpService.userlogin(this.model).subscribe(
  (response:string)=>{this.posts=response;
    if(this.posts==="you are welcome")
    this.router.navigate(['/getproduct']);
  else
  alert(this.posts);}
);
}
usersignup()
{
  this.httpService.usersignup(this.model).subscribe(
    (response:string)=>{this.posts=response;
      alert(this.posts);
    //if(this.posts==="Account has been created")
    //this.router.navigate(['/home'])
  }
  );
}
}

