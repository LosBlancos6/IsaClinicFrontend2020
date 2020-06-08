import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public reviewDoctor(body): Observable<any> {
    return this.http.post(`${this.baseUrl}review/doctor`, body);
  }

}
