import { Alumno } from './../models/alumno';
import { Injectable, DebugElement } from '@angular/core';

@Injectable()
export class AlumnoService {
id: number;
private listAlumnos: Array<Alumno> = [
 new Alumno('toni', 'i', '1111')
];

constructor() {}

public getAlumnosList(): Array<Alumno> {
    console.log('entra en moido get Alumno' + this.listAlumnos.length);
    return this.listAlumnos;
}

public addAlumno(alumno: Alumno): void {
    console.log('Entra en modo add alumno' + this.listAlumnos.length);
    this.listAlumnos.push(alumno);
    console.log('Entra en el modo add alumno' + this.listAlumnos.length);
}

public getAlumno(id: number): Alumno {
    return this.listAlumnos[id];
}

public deleteAlumno(alumno: Alumno): void {
    for (let i = 0; i < this.listAlumnos.length; i++) {
        if (this.listAlumnos[i]['dni'] === alumno.dni) {
            this.listAlumnos.slice(i, 1);
        }
    }
}

public modAlumno(id: number, alumno: Alumno): void {
    for (let i = 0; i < this.listAlumnos.length; i++) {
        if (i === id) {
            this.listAlumnos[i].nombre = alumno.nombre;
            this.listAlumnos[i].apellidos = alumno.apellidos;
            this.listAlumnos[i].dni = alumno.dni;
        }
    }
}
