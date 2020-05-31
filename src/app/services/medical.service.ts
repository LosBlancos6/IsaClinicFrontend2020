import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicalService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getAllMedicalByClinic(id): Observable<any> {
    return this.http.get(`${this.baseUrl}clinics/${id}/medical`);
  }


}
