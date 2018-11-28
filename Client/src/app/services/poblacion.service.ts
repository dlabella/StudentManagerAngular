import { Poblacion } from '../models/poblacion';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoblacionService {

  public  GetPoblaciones(): Array<Poblacion> {
    const poblaciones = new Array<Poblacion>();
    const barcelona = new Poblacion();
    barcelona.id = 'BCN';
    barcelona.name = 'Barcelona';

    const madrid = new Poblacion();
    madrid.id = 'MAD';
    madrid.name = 'Madrid';

    poblaciones.push(barcelona);
    poblaciones.push(madrid);
    return poblaciones;
  }
}
