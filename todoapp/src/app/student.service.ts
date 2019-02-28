import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpClientModule } from  '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Student} from './Student';
import {catchError} from 'rxjs/operators';
import { Vak } from './Vak';
import { Opleiding } from './Opleiding';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  currentStudent : Student;
  vak: Vak;

  constructor(private http: HttpClient) { }

  findAll(): Observable<Student[]>  {
    return this.http.get<any>('http://localhost:8080/student').pipe();
  }

  saveUser(student: Student) {
    return this.http.post('http://localhost:8080/student', student).pipe( );
  }

  studentById(student: Student){
    return this.http.post('http://localhost:8080/student/{id}', student).pipe( );
  }
  findbyUserName(userName: string) :Observable <Student[]>{
    return this.http.get<any>('http://localhost:8080/username/'+userName).pipe();
  }

  authenticateStudent(student: Student) {
    return this.http.post('http://localhost:8080/authenticateStudent', student).pipe()
    ;
  }

  delete(id) {
    return this.http.delete('http://localhost:8080/student/' + id).pipe()
    ;
  }

  inschrijvenVak(studentId, vakId){
    return this.http.get('http://localhost:8080/student/'+studentId+'/vak/'+vakId)
  }

  displayUser(id: number): Observable<Student>  {
    return this.http.get<any>('http://localhost:8080/student/'+id);
  }

  uploadFile(student: Student){
    return this.http.post<any>('http://localhost:8080/uploadFile', student).pipe();
  }

}
