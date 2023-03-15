import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StrompriserService {
  private baseUrl = 'https://www.hvakosterstrommen.no/api/v1/prices';

  constructor(private http: HttpClient) { }

  getStrompriser(ar: string, maned: string, dag: string, prisomrade: string): Observable<any> {
    const url = `${this.baseUrl}/${ar}/${maned}-${dag}_${prisomrade}.json`;
    return this.http.get<any>(url);
  }
}