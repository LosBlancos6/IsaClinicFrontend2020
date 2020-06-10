import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacationRequestService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public createVacationRequest(body): Observable<any> {
    return this.http.post(`${this.baseUrl}vacation-request`, body);
  }

  public getAllVacationRequests(): Observable<any> {
    return this.http.get(`${this.baseUrl}vacation-request`);
  }

}
