import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoblacionServiceService {

  constructor() { }
  public  GetPoblaciones(): Array<string> {
    return poblaciones;
  }
}
