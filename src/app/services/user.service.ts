import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'https://ljutic-task-manager.herokuapp.com/users/me';
  private avatarUrl = 'https://ljutic-task-manager.herokuapp.com/users/me/avatar';

  constructor(private http: HttpClient) { }

  updateUser(updates) {
    return this.http.patch<any>(this.userUrl, updates);
  }

  deleteUser(user) {
    return this.http.delete<any>(this.userUrl, user);
  }

  uploadAvatar(avatar) {
    return this.http.post<any>(this.avatarUrl, avatar);
  }

}
