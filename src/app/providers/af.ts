import {Injectable} from "@angular/core";
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

import * as firebase from 'firebase/app';


@Injectable()
export class AF {
  public users: FirebaseListObservable<any[]>;
  constructor(public af: AngularFireAuth, db: AngularFireDatabase) {
    this.users = db.list('users');
  }

  
  /**
   * Logs in the user
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  login()
 {
      let user;
      let provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope('user_birthday');
      return firebase.auth().signInWithPopup(provider)
}

  logout() {
    this.af.authState.subscribe(_user => {
    let updateUserStatus = {
      is_active : false,
      last_seen : new Date()
    }  
    this.users.update(_user.uid, updateUserStatus);
  })
    this.af.auth.signOut();
    console.log(this.af);
    
    
  }
}