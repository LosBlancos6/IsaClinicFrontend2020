import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationRequestsService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getAllRegistrationRequests(): Observable<any> {
    return this.http.get(`${this.baseUrl}registration-requests`);
  }

  public approveRegistrations(id): Observable<any> {
    return this.http.put(`${this.baseUrl}registration-requests/${id}/approve`, id);
  }

  public deniedRegistrations(id): Observable<any> {
    return this.http.put(`${this.baseUrl}registration-requests/${id}/decline`, id);
  }

}
