import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_LOGIN_LINK = 'https://immense-citadel-91115.herokuapp.com/api/Users/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  isAuthenticated() {
    return !!localStorage.getItem('token');
  }

  login(credentials): Observable<any> {
    return this.http.post<any>(API_LOGIN_LINK, credentials);
  }
}
