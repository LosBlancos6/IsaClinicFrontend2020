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

  public createPatient(body): Observable<any> {
    return this.http.post(this.baseUrl + 'patients', body);
  }


}
