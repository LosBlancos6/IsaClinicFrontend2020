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

  public getAllPatients(): Observable<any> {
    return this.http.get(`${this.baseUrl}patients`);
  }

  public getPatientProfileById(id): Observable<any> {
    return this.http.get(`${this.baseUrl}patients/${id}`);
  }

  public updatePatient(id, body): Observable<any> {
    return this.http.put(`${this.baseUrl}patients/${id}`, body);
  }

  public getAllPatientsByClinic(id): Observable<any> {
    return this.http.get(`${this.baseUrl}patients/${id}/clinic`);
  }

  public searchPatients(filter = {}, id): Observable<any> {
    return this.http.get(`${this.baseUrl}patients/${id}/search${this.buildFilterRequest(filter)}`);
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
