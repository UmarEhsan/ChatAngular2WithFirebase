import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database'

@Injectable()
export class MessageServiceService {
public messages: FirebaseListObservable<any[]>;
database;
  constructor(db: AngularFireDatabase) {
    this.database = db;
    this.messages = db.list('messages');
   }

   sendMessage(messageData)
   { 
       messageData.uniqueIndex = parseInt(messageData.senderId)  +  parseInt(messageData.recieverId);
       ;
       this.messages.push(messageData);
       const messagesObservable = this.retriveMessages(messageData.uniqueIndex);
       return messagesObservable;
   }

   retriveMessages(uniqueInd)
   {
      let messages;
     const uniqueIndex = uniqueInd;
     const queryObservable = this.database.list('/messages', {
     query: {
        orderByChild: 'uniqueIndex',
        equalTo: uniqueIndex
        }
});

// subscribe to changes
return queryObservable;

   }

}
