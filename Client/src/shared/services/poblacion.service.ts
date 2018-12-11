import { Poblacion } from '../models/poblacion';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceBase } from './serviceBase';

@Injectable({
  providedIn: 'root'
})
export class PoblacionService extends ServiceBase {

  constructor(httpClient: HttpClient) {
    super('http://127.0.0.1:3000/', httpClient);
  }

  public  GetPoblaciones(): Observable<Poblacion[]> {
    return this.apiGetCall('poblacion');
  }
}
