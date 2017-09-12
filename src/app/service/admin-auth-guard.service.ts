import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from 'app/service/auth.service';
import { UserService } from 'app/service/user.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.auth.appUser$
      .map(appUser => appUser.isAdmin);
  }
}
