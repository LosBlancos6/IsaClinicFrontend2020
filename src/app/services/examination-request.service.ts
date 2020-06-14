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

  public createAvailableExamination(body): Observable<any> {
    return this.http.post(`${this.baseUrl}examination-request/available-examinations`, body);
  }

  public getExaminationRequestByMedical(id): Observable<any> {
    return this.http.get(`${this.baseUrl}examination-request/${id}/doctor-examination`);
  }

  public getExaminationRequestByPatient(id): Observable<any> {
    return this.http.get(`${this.baseUrl}examination-request/${id}/patient-examination`);
  }

  public getAllExaminationRequestByClinic(id): Observable<any> {
    return this.http.get(`${this.baseUrl}examination-request/${id}/clinic`);
  }

  public getAvailableExaminationsOfDoctor(body, id): Observable<any> {
    return this.http.post(`${this.baseUrl}examination-request/available/${id}/doctor`, body);
  }

  public bookingExamination(patientId, examinationRequestId, body = {}): Observable<any> {
    return this.http.post(`${this.baseUrl}examination-request/predefined-booking/${patientId}/${examinationRequestId}`, body);
  }

  public bookingAvailableExamination(patientId, examinationRequestId, body = {}): Observable<any> {
    return this.http.post(`${this.baseUrl}examination-request/available-examination/${patientId}/${examinationRequestId}`, body);
  }

  public approveExaminationRequest(examinationId, operationRoomId, body = {}): Observable<any> {
    return this.http.put(`${this.baseUrl}examination-request/${examinationId}/approve/${operationRoomId}`, body);
  }

  public searchExamination(filter = {}, id): Observable<any> {
    return this.http.get(`${this.baseUrl}examination-request/search/${id}${this.buildFilterRequest(filter)}`);
  }


  private buildFilterRequest(filterObject: any): string {
    const values = Object.values(filterObject).filter(filterValue => filterValue !== null || filterValue !== '');
    if (values.length === 0) {
      return '';
    }
    let filterQuery = '?';
    let counter = 0;
    Object.keys(filterObject).forEach(x => {
      if (filterObject[x] !== null && filterObject[x] !== '') {
        let y = '';
        if (counter === 0) {
          y = '';
        } else {
          y = '&'
        }
        filterQuery = filterQuery + y + x + '=' + filterObject[x];
        counter = counter + 1;
      }
    })
    return filterQuery;
  }

}
