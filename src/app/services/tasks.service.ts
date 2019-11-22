import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  profileUrl = 'https://ljutic-task-manager.herokuapp.com/users/me';

  constructor(private http: HttpClient,
              private authService: AuthService) { }

  getProfile() {
    return this.http.get<any>(this.profileUrl, this.authService.loggedUser).subscribe(res => console.log(res));
  }
}
