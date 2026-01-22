import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private loginUrl = 'https://dev.gosure.ai/api/v1/users/login';
  private logoutUrl = 'https://dev.gosure.ai/api/v1/users/logout';
  private tokenKey = 'gosure_token';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {

    const headers = new HttpHeaders({
      'x-tenant': 'vertis',
      'Content-Type': 'application/json'
    });

    const body = {
      username: username,
      password: password
    };

    return this.http.post<any>(this.loginUrl, body, { headers: headers });
  }

  saveToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }

logoutApi() {
  const token = this.getToken();

  const headers = new   HttpHeaders({
    'Authorization': token || '',
    'x-tenant': 'vertis',
    'Content-Type': 'application/json'
  });

  return this.http.post(
    this.logoutUrl ,
    {},
    { headers: headers }
  );
}
  
}
