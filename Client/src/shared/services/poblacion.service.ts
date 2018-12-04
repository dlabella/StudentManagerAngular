import { Poblacion } from '../models/poblacion';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoblacionService {

  public  GetPoblaciones(): Array<Poblacion> {
    const poblaciones = new Array<Poblacion>();
    const barcelona = new Poblacion('BCN', 'Barcelona');
    const madrid = new Poblacion('MAD', 'Madrid');

    poblaciones.push(barcelona);
    poblaciones.push(madrid);
    return poblaciones;
  }
}
