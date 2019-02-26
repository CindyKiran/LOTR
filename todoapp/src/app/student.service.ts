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
    return this.http.get<any>('http://localhost:8080/student').pipe(
      catchError(this.handleError<Student>(`findAll`))
    );
  }

  saveUser(student: Student) {
    return this.http.post('http://localhost:8080/student', student).pipe(
      catchError(this.handleError<Student>(`saveUser`))
    );
  }

  studentById(student: Student){
    return this.http.post('http://localhost:8080/student/{id}', student).pipe(
      catchError(this.handleError<Student>(`studentById`))
    );
  }

  authenticateStudent(student: Student) {
    return this.http.post('http://localhost:8080/authenticateStudent', student).pipe(
      catchError(this.handleError<Student>(`saveUser`))
    );
  }

  delete(id) {
    return this.http.delete('http://localhost:8080/student/' + id).pipe(
      catchError(this.handleError<Student>(`delete`))
    );
  }

  private handleError<Student> (operation = 'operation', result?: Student) {
    return (error: any): Observable<Student> => {
      console.error(error);
      return of(result as Student);
    };
  }
}
