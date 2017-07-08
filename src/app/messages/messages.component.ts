
import { Component, OnInit, Input  } from '@angular/core';
import { MessageServiceService } from './message-service.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
@Input() chatUser;
@Input() currentUser;
@Input() messages;

  constructor(private messageService : MessageServiceService) { 
    this.scrollTop();
  }

  ngOnInit() {
    debugger
    
    
  }
sendMessage(message)
{
  debugger
  let sender   = this.currentUser;
  let reciever = this.chatUser;
  let messageData = {};
      messageData['message']  = message.value;
      messageData['senderId'] = sender.providerData[0].uid;
      messageData['recieverId'] = reciever.providerId;
      messageData['senderImage'] = sender.photoURL;
      // messageData['recieverImage'] = reciever.photoURL;
      
      const messages = this.messageService.sendMessage(messageData);
      messages.subscribe(queriedItems => {
       console.log(queriedItems);  
});
this.scrollTop();

}
scrollTop()
{
  debugger
var box = document.getElementById('message');
box.scrollTop = box.scrollHeight + box.offsetHeight;
}
checkCurrentUser(message)
{
  
  return message.senderId === this.currentUser.providerData[0].uid;

}



}
