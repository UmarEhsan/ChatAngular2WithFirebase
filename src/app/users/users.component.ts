import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {AF} from "../providers/af";
import {UsersService} from '../users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Output()  selectedUserForMessage = new EventEmitter();
  _users; currentUser; selectedUser;
  constructor(public af : AF, private users : UsersService)
  {
    af.af.authState.subscribe(_user => {
    this.currentUser = _user;
  })
}
isOfflineOrOnline(isActive)
{
  return isActive === "Online" || "Offline";
}


  ngOnInit() {
    this.users.retrieveUsers().subscribe(users => {
      this._users = users;
      console.log(users)
    }) 
  }

}
