import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getClinicProfileById(id): Observable<any> {
    return this.http.get(`${this.baseUrl}clinics/${id}`);
  }

  public getAllClinics(): Observable<any> {
    return this.http.get(`${this.baseUrl}clinics`);
  }

  public updateClinic(id, body): Observable<any> {
    return this.http.patch(`${this.baseUrl}clinics/${id}`, body);
  }

  public searchClinic(filter = {}): Observable<any> {
    return this.http.get(`${this.baseUrl}clinics/search${this.buildFilterRequest(filter)}`);
  }

  public searchFreeDoctorInClinic(body): Observable<any> {
    return this.http.post(`${this.baseUrl}clinics/search-doctor`, body);
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