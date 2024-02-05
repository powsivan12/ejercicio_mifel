import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TablaService {
  private apiUrl = 'http://jsonplaceholder.typicode.com/users';
  private postUrl = 'http://httpbin.org/post';

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  enviarDatos(data: any): Observable<any> {
    return this.http.post<any>(this.postUrl, data);
  }
}
