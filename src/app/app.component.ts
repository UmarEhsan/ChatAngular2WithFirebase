import { Component } from '@angular/core';

import {AF} from './providers/af';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isLoggedIn: boolean;
  title = 'app';
  user = {}
  constructor(public af: AF, private router: Router) 
  {
     af.af.authState.subscribe(auth => 
    {
    if(auth) 
    {
        this.router.navigate(['']);
        this.isLoggedIn = true;
    } 
    else
    {
       this.router.navigate(['login']);
       this.isLoggedIn = false;
    }
  });
}
logout()
{
  this.af.logout()
}
  
}

