import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = 'https://ljutic-task-manager.herokuapp.com/users';
  private loginUrl = 'https://ljutic-task-manager.herokuapp.com/users/login';
  private logoutUrl = 'https://ljutic-task-manager.herokuapp.com/users/logout';

  loggedUser: any;

  constructor(private http: HttpClient) { }

  registerUser(user) {
    this.http.post<any>(this.registerUrl, user).subscribe(res => this.loggedUser = res);
    return this.http.post<any>(this.registerUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this.loginUrl, user);
  }

  logoutUser() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.loggedUser.token}`
      })
    };

    return this.http.post<any>(this.logoutUrl, this.loggedUser, httpOptions);
  }

  loggedIn() {
    return false || !!this.loggedUser.token;
  }

  getToken() {
    return this.loggedUser.token;
  }

}
