import { Component } from '@angular/core';
import { AuthService } from "app/auth.service";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user$;

    constructor(private auth: AuthService) { 
      auth.user$.subscribe(appUser => this.user$ = appUser);
    }
  
    logout() {
      this.auth.logout();
    }
}
