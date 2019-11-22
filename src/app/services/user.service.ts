import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  profileUrl = 'https://ljutic-task-manager.herokuapp.com/users/me';

  user: object;

  constructor(private http: HttpClient,
              private authService: AuthService) { }

  getProfile() {
    this.http.get<any>(this.profileUrl, this.authService.loggedUser).subscribe(res => this.user = {...res});
  }
}
