import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loggedUser = JSON.parse(localStorage.getItem('user'));
  avatar;

  constructor(private user: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  updateUser() {
    // objekte pretvorio u nizove, uporedio, razliku u propertijima sacuvao u novi niz koji je pretvoren u objekat
    const updated = Object.entries(this.loggedUser);
    const current = Object.entries(JSON.parse(localStorage.getItem('user')));
    const changes = updated.filter((value, i) => value[1] !== current[i][1]);
    const changesObject = Object.fromEntries(changes);

    this.user.updateUser(changesObject)
      .subscribe(
        res => {
          localStorage.setItem('user', JSON.stringify(res));
          this.loggedUser = res;
        },
        err => {
          console.log(err);
        }
      );
  }

  deleteUser() {
    this.user.deleteUser(this.loggedUser)
      .subscribe(
        res => {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          this.router.navigate(['/login']);
        },
        err => {
          console.log(err);
        }
      );
  }

  uploadAvatar() {
    this.user.uploadAvatar(this.avatar)
    .subscribe(
      res => {
        console.log(res)
      },
      err => {

      }
    );
      
  }
 
}
