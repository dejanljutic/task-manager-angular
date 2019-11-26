import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loggedUser = JSON.parse(localStorage.getItem('user'));
  avatar = `https://ljutic-task-manager.herokuapp.com/users/${this.loggedUser._id}/avatar`;
  newAvatar: File = null;

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

  onFileSelected(event) {
    this.newAvatar = event.target.files[0];
  }

  uploadAvatar() {
    const fd = new FormData();
    fd.append('avatar', this.newAvatar, this.newAvatar.name);

    this.user.uploadAvatar(fd)
    .subscribe(
      res => {
        location.reload();
      },
      err => {
        console.log(err);
      }
    );
      
  }

  noAvatar() {
    this.avatar = 'https://www.hoursproject.com/images/cache/square_thumb/images/user/default.png';
  }
 
}
