import { Sexo } from '../models/sexo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SexoService {

  public  GetSexo(): Array<Sexo> {
    const sexos = new Array<Sexo>();
    const hombre = new Sexo('H', 'Hombre');
    const mujer = new Sexo('M', 'Mujer');
    const nobinario = new Sexo('?', 'No Binario');

    sexos.push(hombre);
    sexos.push(mujer);
    sexos.push(nobinario);

    return sexos;
  }
}
