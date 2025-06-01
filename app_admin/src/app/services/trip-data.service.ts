import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TripDataService {
  private apiBase = 'http://localhost:3000/api/trips';

  constructor(private http: HttpClient) { }

  getTrips() { return this.http.get<any[]>(this.apiBase); }
  getTrip(code: string) { return this.http.get<any>(`${this.apiBase}/${code}`); }
  addTrip(t: any) { return this.http.post<any>(this.apiBase, t); }
  updateTrip(t: any) { return this.http.put<any>(`${this.apiBase}/${t.code}`, t); }
  deleteTrip(code: string) { return this.http.delete(`${this.apiBase}/${code}`); }
}
