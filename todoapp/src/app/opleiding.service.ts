import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Opleiding} from './Opleiding';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OpleidingService {

  constructor(private http: HttpClient) { }

  
  findAll(): Observable<Opleiding[]>  {
    return this.http.get<any>('http://localhost:8080/opleiding').pipe(
      catchError(this.handleError<Opleiding>(`findAll`))
    );
  }

  saveOpleiding(opleiding: Opleiding) {
    return this.http.post('http://localhost:8080/opleiding', opleiding).pipe(
      catchError(this.handleError<Opleiding>(`saveOpleiding`))
    );
  }

  private handleError<Opleiding> (operation = 'operation', result?: Opleiding) {
    return (error: any): Observable<Opleiding> => {
      console.error(error);
      return of(result as Opleiding);
    };
  }

  displayVakken(opleiding: number): Observable<Opleiding>  {
    //console.log(opleiding);
    return this.http.get<any>('http://localhost:8080/opleiding/'+opleiding);
  }
}

