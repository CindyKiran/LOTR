import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Student} from './Student';

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
  findbyUserName(username: string) :Observable <Student[]>{
    return this.http.get<any>('http://localhost:8080/username/'+username).pipe();
  }

  authenticateStudent(student: Student) {
    return this.http.post('http://localhost:8080/authenticateStudent', student).pipe()
    ;
  }

  delete(id) {
    return this.http.delete('http://localhost:8080/student/' + id).pipe()
    ;
  }

  uploadFile(student: Student){
    return this.http.post<any>('http://localhost:8080/uploadFile', student).pipe();
  }
  // update(student: Student) {
  //   return this.http.put(`{'http://localhost:8080/{id}`, student);
  // }
  // updateStudent(uploads){
  //   return this.http.put('http://localhost:8080/student/{uploads}', uploads);
  // }
  // patchUploads(uploads: String){
  //   return this.http.patch('http://localhost:8080/student', uploads);
  // }
}
