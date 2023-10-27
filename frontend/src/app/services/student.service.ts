import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}

  createStudentInfo = (payload: any) => {
    return this.http.post(`${environment.apiBaseUrl}/students`, payload);
  };

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${environment.apiBaseUrl}/students`);
  }
}
