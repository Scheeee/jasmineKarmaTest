import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Login } from '../models/login';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API: string = 'http://localhost:8080/api/login';

  constructor(private http: HttpClient) { }

  logar(login: Login): Observable<User> {
    return this.http.post<User>(this.API, login);
  }

  deslogar(): Observable<any> {
    return this.http.get<any>(this.API+'/deslogar');
  }

  addToken(token: string){
    localStorage.setItem('token', token);
  }

  removerToken(){
    localStorage.removeItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  hasPermission(role: string): boolean {
    const token = this.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      const userRoles: string[] = decodedToken.role;
      return userRoles.includes(role);
    }
    return false;
  }

  
}
  

