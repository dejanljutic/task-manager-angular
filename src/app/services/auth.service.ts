import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = 'https://ljutic-task-manager.herokuapp.com/users';
  private loginUrl = 'https://ljutic-task-manager.herokuapp.com/users/login';
  private logoutUrl = 'https://ljutic-task-manager.herokuapp.com/users/logout';

  constructor(private http: HttpClient) { }

  registerUser(user) {
    return this.http.post<any>(this.registerUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this.loginUrl, user);
  }

  logoutUser() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.getToken()}`
      })
    };

    return this.http.post<any>(this.logoutUrl, localStorage.getItem('user'), httpOptions);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
