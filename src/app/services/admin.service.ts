import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getAdminProfileById(id): Observable<any> {
    return this.http.get(`${this.baseUrl}admins/${id}`);
  }

  public getAllAdmins(): Observable<any> {
    return this.http.get(`${this.baseUrl}admins`);
  }

  public updateAdmin(id, body): Observable<any> {
    return this.http.put(`${this.baseUrl}admins/${id}`, body);
  }

}
