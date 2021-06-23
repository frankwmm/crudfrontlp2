import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  httpHeaders = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    })
  };
  endPoint = 'curso/';

  constructor(private httpClient: HttpClient) {


  }

  public getCurso(): Observable<any> {
    return this.httpClient.get<any>(`${environment.url}${this.endPoint}`, this.httpHeaders)
      .pipe(retry(1),
        catchError(this.httpError));
  }

  public getCursoById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${environment.url}${this.endPoint}${id}`, this.httpHeaders)
      .pipe(retry(1),
        catchError(this.httpError));
  }

  public saveCurso(params): Observable<any> {

    return this.httpClient.post(`${environment.url}${this.endPoint}`, params, this.httpHeaders)
      .pipe(retry(1),
        catchError(this.httpError));
  }

  public updateCurso(id: number, params): Observable<any> {
    return this.httpClient.put(`${environment.url}${this.endPoint}${id}`, params, this.httpHeaders)
      .pipe(retry(1),
        catchError(this.httpError));
  }

  public deleteCurso(id: number): Observable<any> {

    return this.httpClient.delete(`${environment.url}${this.endPoint}${id}`, this.httpHeaders)
      .pipe(retry(1),
        catchError(this.httpError));
  }

  httpError(error) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Error Code: ${error.status}`;
    }
    return throwError(msg);
  }
}
