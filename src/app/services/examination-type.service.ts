import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExaminationTypeService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getAllExaminationType(): Observable<any> {
    return this.http.get(`${this.baseUrl}examination-type`);
  }

}
