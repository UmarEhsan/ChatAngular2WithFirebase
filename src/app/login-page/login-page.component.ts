import { Component } from '@angular/core';
import {AF} from "../providers/af";
import {Router} from "@angular/router";
import {UsersService} from '../users/users.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  
  constructor(public af: AF, private router: Router, private users:UsersService) {}
  // name = this.users.name;
  login()
  {
    
    this.af.login().then( userData => {
       // This gives you a Facebook Access Token.
       console.log(userData)
       this.users.saveUsers(userData.user);
       this.router.navigate(['']);
});
  }
}