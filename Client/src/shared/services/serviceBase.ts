import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

export abstract class ServiceBase {
  private apiUrl: string;
  private httpClient: HttpClient;

  constructor(apiUrl: string, httpClient: HttpClient) {
    this.apiUrl = apiUrl;
    this.httpClient = httpClient;
  }

  public apiGetCall<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(this.getApiUrl(url)).pipe(
      catchError(this.handleError('getCustomers', []))
    );
  }

  handleError<T> (serviceName = '', operation = 'operation', result = {} as T) {
    return (error: HttpErrorResponse): Observable<T> => {
      // Todo -> Send the error to remote logging infrastructure
      console.log(error); // log to console instead
      const message = (error.error instanceof ErrorEvent) ?
        error.error.message :
       '{error code: ${error.status}, body: "${error.message}"}';
      // -> Return a safe result.
      return of( result );
    };
  }

  private log(message: string) {
    console.error(message);
  }

  private getApiUrl(part: string): string {
    return this.apiUrl + part;
  }
}
