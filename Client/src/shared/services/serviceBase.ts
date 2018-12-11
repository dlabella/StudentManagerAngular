import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export abstract class ServiceBase {
  private apiUrl: string;
  private httpClient: HttpClient;

  constructor(apiUrl: string, httpClient: HttpClient) {
    this.apiUrl = apiUrl;
    this.httpClient = httpClient;
  }

  public apiGetCall<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(this.getApiUrl(url));
  }

  public apiPutCall<T>(url: string, data: T): Observable<T> {
    return this.httpClient.put<T>(this.getApiUrl(url), data);
  }

  public apiPatchCall<T>(url: string, data: T): Observable<T> {
    return this.httpClient.patch<T>(this.getApiUrl(url), data);
  }

  public apiDeleteCall<T>(url: string, data: T): Observable<T> {
    return this.httpClient.delete<T>(this.getApiUrl(url), data);
  }

  private getApiUrl(part: string): string {
    return this.apiUrl + part;
  }
}
