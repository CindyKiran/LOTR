import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Vak} from './Vak';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VakService {

  constructor(private http: HttpClient) { }

  
  findAll(): Observable<Vak[]>  {
    return this.http.get<any>('http://localhost:8080/vak').pipe(
      catchError(this.handleError<Vak>(`findAll`))
    );
  }

  saveVak(vak: Vak) {
    return this.http.post('http://localhost:8080/vak', vak).pipe(
      catchError(this.handleError<Vak>(`saveVak`))
    );
  }

  updateVak(id: Number, vak: Vak) {
    return this.http.put('http://localhost:8080/vak/'+id+'/schrijfin', {}).pipe();
  }

  updateVak2(studentId: Number, vak: Vak) {
    return this.http.put('http://localhost:8080/student/'+studentId+'/schrijfin', {}).pipe();
  }

 

  private handleError<Vak> (operation = 'operation', result?: Vak) {
    return (error: any): Observable<Vak> => {
      console.error(error);
      return of(result as Vak);
    };
  }
}

