import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Docent} from './Docent';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DocentService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Docent[]>  {
    return this.http.get<any>('http://localhost:8080/docent').pipe(
      catchError(this.handleError<Docent>(`findAll`))
    );
  }

  saveUser(docent: Docent) {
    return this.http.post('http://localhost:8080/docent', docent).pipe(
      catchError(this.handleError<Docent>(`saveUser`))
    );
  }

  authenticate(docent: Docent) {
    return this.http.post('http://localhost:8080/authenticateDocent', docent).pipe(
      catchError(this.handleError<Docent>(`saveUser`))
    );
  }

  delete(id) {
    return this.http.delete('http://localhost:8080/docent/' + id).pipe(
      catchError(this.handleError<Docent>(`delete`))
    );
  }


  private handleError<Docentt> (operation = 'operation', result?: Docent) {
    return (error: any): Observable<Docent> => {
      console.error(error);
      return of(result as Docent);
    };
  }
}
