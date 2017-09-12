import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase"; 
import { Observable } from "rxjs/Observable";
import { ActivatedRoute } from "@angular/router";
import { AppUser } from 'app/models/app-user';
import { UserService } from 'app/service/user.service';
import 'rxjs/add/operator/switchmap';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {

  user$: Observable<firebase.User>

  constructor(private userService: UserService, private afAuth: AngularFireAuth, private route: ActivatedRoute) { 
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

  get appUser$(): Observable<AppUser>{
    return this.user$
      .switchMap(user =>  {
        if (user) return this.userService.get(user.uid);

        return Observable.of(null);
      });
  }
}
