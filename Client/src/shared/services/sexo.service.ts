import { Sexo } from '../models/sexo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SexoService {

  public  GetSexo(): Array<Sexo> {
    const sexos = new Array<Sexo>();
    const hombre = new Sexo();
    hombre.id = 'H';
    hombre.name = 'Hombre';

    const mujer = new Sexo();
    mujer.id = 'M';
    mujer.name = 'Mujer';

    const nobinario = new Sexo();
    nobinario.id = '?';
    nobinario.name = 'No Binario';

    sexos.push(hombre);
    sexos.push(mujer);
    sexos.push(nobinario);

    return sexos;
  }
}
