
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceBase {
  private apiUrl: string;
  private httpClient: HttpClient;

  constructor(apiUrl: string, httpClient: HttpClient) {
    this.apiUrl = apiUrl;
  }

  public apiGetCall<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(this.getApiUrl(url));
  }

  private log(message: string) {
    console.error(message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log('${operation} failed: ${error.message}');
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private getApiUrl(part: string): string {
    return this.apiUrl + part;
  }
}
