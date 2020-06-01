import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public login(body): Observable<any> {
    return this.http.post(this.baseUrl + 'auth/login', body);
  }

  public registration(body): Observable<any> {
    return this.http.post(this.baseUrl + 'auth/patients', body);
  }

  public showByRole(roles: string[]): boolean {
    const userRaw = localStorage.getItem('user');
    const user = JSON.parse(userRaw);

    return roles.some(role => role === user.userType);
  }


}
