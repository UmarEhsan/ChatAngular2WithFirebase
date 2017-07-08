import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Injectable()
export class UsersService {
  public users: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.users = db.list('users');
    // // this.users = db.database.list('messages');
    // console.log(db.database.app)
   }

  saveUsers(user)
  {
    let _user = {
      
      displayName: user.displayName,
      email: user.email,
      timestamp: Date.now(),
      photoURL : user.photoURL,
      providerId : user.providerData[0].uid,
      is_active  : true
    };
    this.users.update(user.uid , _user)
   
  }

  retrieveUsers()
  {
    console.log(this.users)
    return this.users;
  }

}
