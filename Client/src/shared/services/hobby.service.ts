import { Hobby } from '../models/hobby';
import { Injectable } from '@angular/core';
import { extend } from 'webdriver-js-extender';
import { ServiceBase } from './serviceBase';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HobbyService extends ServiceBase {

  constructor(httpClient: HttpClient) {
    super('http://127.0.0.1:3000/', httpClient);
  }

  public  GetHobbies(): Observable<Hobby[]> {
    return this.apiGetCall('hobby');
  }
}
