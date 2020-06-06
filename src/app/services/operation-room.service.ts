import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OperationRoomService {

  private baseUrl = environment.baseUrl;


  constructor(private http: HttpClient) { }

  public getOperationRoomsByClinicId(id) {
    return this.http.get(`${this.baseUrl}operation-room/${id}/room`)
  }


}
