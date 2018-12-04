import { Hobby } from '../models/hobby';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HobbyService {

  public  GetHobbies(): Array<Hobby> {
    const hobbies = new Array<Hobby>();

    const dotnet = new Hobby('.net', '.NET Programing');
    const visualStudio = new Hobby('vs', 'Visual Studio');

    hobbies.push(dotnet);
    hobbies.push(visualStudio);
    return hobbies;
  }
}
