import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationRoomService {

  private baseUrl = environment.baseUrl;


  constructor(private http: HttpClient) { }

  public getOperationRoomsByClinicId(id): Observable<any> {
    return this.http.get(`${this.baseUrl}operation-room/${id}/room`)
  }

  public getOperationRooms(): Observable<any> {
    return this.http.get(`${this.baseUrl}operation-room`);
  }

  public getOperationRoomById(id): Observable<any> {
    return this.http.get(`${this.baseUrl}operation-room/${id}`);
  }

  public updateOperationRoom(body, id): Observable<any> {
    return this.http.put(`${this.baseUrl}operation-room/update-operation-room/${id}`, body);
  }

  public deleteOperationRoom(id, body = {}): Observable<any> {
    return this.http.put(`${this.baseUrl}operation-room/delete/${id}`, body);
  }

  public createOperationRoom(body, id): Observable<any> {
    return this.http.post(`${this.baseUrl}operation-room/create-operation-room/${id}`, body);
  }

}
