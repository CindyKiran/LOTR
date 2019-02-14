import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Todo} from './Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Todo[]>  {
    return this.http.get<any>('http://localhost:8080/todo').pipe(
      catchError(this.handleError<Todo>(`findAll`))
    );
  }

  saveUser(todo: Todo) {
    return this.http.post('http://localhost:8080/todo', todo).pipe(
      catchError(this.handleError<Todo>(`saveUser`))
    );
  }

  authenticate(todo: Todo) {
    return this.http.post('http://localhost:8080/authenticate', todo).pipe(
      catchError(this.handleError<Todo>(`saveUser`))
    );
  }
  delete(id) {
    return this.http.delete('http://localhost:8080/todo/' + id).pipe(
      catchError(this.handleError<Todo>(`delete`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
