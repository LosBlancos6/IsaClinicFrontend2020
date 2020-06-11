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

  public getMedicalProfileById(id): Observable<any> {
    return this.http.get(`${this.baseUrl}medicalStaff/${id}`);
  }

  public createDoctor(body, id): Observable<any> {
    return this.http.post(`${this.baseUrl}medicalStaff/${id}`, body)
  }

  public deleteDoctor(id, body = {}): Observable<any> {
    return this.http.put(`${this.baseUrl}medicalStaff/delete/${id}`, body)
  }

  public updateMedical(id, body): Observable<any> {
    return this.http.put(`${this.baseUrl}medicalStaff/${id}`, body);
  }

  public searchMedicalStaff(filter = {}): Observable<any> {
    return this.http.get(`${this.baseUrl}medicalStaff/search${this.buildFilterRequest(filter)}`);
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
