import { Alumno } from './../models/alumno';
import { Injectable, DebugElement } from '@angular/core';
import { ServiceBase } from './serviceBase';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AlumnoService extends ServiceBase {

  constructor(httpClient: HttpClient) {
    super('http://127.0.0.1:3000/', httpClient);
  }

  public getAlumnosList(): Observable<Alumno[]> {
    return this.apiGetCall('alumno');
  }

  public getAlumno(id: number): Observable<Alumno> {
    return this.apiGetCall('alumno/' + id);
  }

  public addAlumno(alumno: Alumno): void {
      this.apiPutCall('alumno', alumno);
  }

  public deleteAlumno(alumno: Alumno): void {
      this.apiDeleteCall('alumno/' + alumno.Id);
  }

  public updateAlumno(id: number, alumno: Alumno): void {
    this.apiPatchCall('alumno/' + id, alumno);
  }
}
