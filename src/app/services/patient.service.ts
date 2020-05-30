import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getPatientProfileById(id): Observable<any> {
    return this.http.get(`${this.baseUrl}patients/${id}`);
  }

  public updatePatient(id, body): Observable<any> {
    return this.http.put(`${this.baseUrl}patients/${id}`, body);
  }

}
