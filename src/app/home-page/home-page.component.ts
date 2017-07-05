import { Component, OnInit} from '@angular/core';
import {AF} from "../providers/af";
import {UsersService} from '../users/users.service';
import { MessageServiceService } from '../messages/message-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  user; selectedUserForChat; messages
  constructor(public af : AF, private users : UsersService, private messageService : MessageServiceService) { 
  af.af.authState.subscribe(_user => {
    this.user = _user;
  })

}
selectedUser(user)
{
  this.selectedUserForChat = user;
  this.retrieveSelectedUserMessages(this.user.providerData[0].uid, user.providerId)
}

retrieveSelectedUserMessages(sender, reciever)
{
  const uniqueIndex = parseInt(sender)  +  parseInt(reciever);
  const messages = this.messageService.retriveMessages(uniqueIndex);
    messages.subscribe(queriedItems => {
       console.log(queriedItems); 
       this.messages = queriedItems;
});
}


  ngOnInit() {
  }

}
