import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExaminationRequestService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public createPredefinedExamination(body): Observable<any> {
    return this.http.post(`${this.baseUrl}examination-request/create`, body);
  }

  public getExaminationRequestByMedical(id): Observable<any> {
    return this.http.get(`${this.baseUrl}examination-request/${id}/doctor-examination`);
  }

  public getExaminationRequestByPatient(id): Observable<any> {
    return this.http.get(`${this.baseUrl}examination-request/${id}/patient-examination`);
  }

  public bookingExamination(patientId, examinationRequestId, body = {}): Observable<any> {
    return this.http.post(`${this.baseUrl}examination-request/predefined-booking/${patientId}/${examinationRequestId}`, body);
  }


}
