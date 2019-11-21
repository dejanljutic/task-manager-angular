import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  logoutUser() {
    this.authService.logoutUser()
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/login']);
        },
        err => {
          console.log(err);
        }
      );
  }

  userLoggedIn() {
    return this.authService.loggedIn();
  }
}
