import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Student} from './Student';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  currentStudent : Student;
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
  findbyUserName() :Observable <Student[]>{
    return this.http.get<any>('http://localhost:8080/username/{userName}').pipe();
  }

  authenticateStudent(student: Student) {
    return this.http.post('http://localhost:8080/authenticateStudent', student).pipe()
    ;
  }

  delete(id) {
    return this.http.delete('http://localhost:8080/student/' + id).pipe()
    ;
  }

  public uploadFile(file: File): Observable<any>{
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post('http://localhost:8080/uploadFile/', formData).pipe();
  }
}
