import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase"; 
import { Observable } from "rxjs/Observable";
import { ActivatedRoute } from "@angular/router";

@Injectable()
export class AuthService {

  user$: Observable<firebase.User>

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute) { 
    this.user$ = afAuth.authState;
  }
    
  login() {
    //if we have a return Url, we will use it. otherwise, we'll use the root of the website. 
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.afAuth.auth.signOut();
  }

}