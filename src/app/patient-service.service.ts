import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Patient, PatientPayload } from 'src/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.apiUrl}/patients`, {
      headers: {
        'Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    })
  }

  createPatient(payload: PatientPayload): Observable<any> {
    return this.http.post(`${this.apiUrl}/patients`, payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
