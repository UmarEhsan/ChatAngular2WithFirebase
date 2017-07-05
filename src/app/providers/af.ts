import {Injectable} from "@angular/core";
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';


@Injectable()
export class AF {
  
  constructor(public af: AngularFireAuth) {}

  
  /**
   * Logs in the user
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  login()
 {
      debugger
       let user;
      let provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope('user_birthday');
      return firebase.auth().signInWithPopup(provider)
  
  }

  logout() {
    this.af.auth.signOut();
  }
}