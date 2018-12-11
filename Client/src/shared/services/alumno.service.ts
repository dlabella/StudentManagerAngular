<<<<<<< HEAD
import { Alumno } from './../models/alumno';
import { Injectable, DebugElement } from '@angular/core';

@Injectable
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
=======
import { Student } from '../models/student';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ServiceBase } from './serviceBase';

@Injectable()

export class AlumnoService extends ServiceBase {

  constructor(httpClient: HttpClient) {
    super('http://127.0.0.1:3000/', httpClient);
  }

  public GetAlumnos(): Observable<Student[]> {
    return this.apiGetCall('alumno');
  }

  public  GetAlumno(id: string): Observable<Student> {
    return this.apiGetCall('alumno/' + id);
  }

  public  SaveAlumno(newStudent: Student): void {
    // const students = this.GetStudents();
    // const filteredStudents = students.filter((student) => student.id === newStudent.id);
    // if (filteredStudents.length > 0) {
    //   const current = filteredStudents[0];
    //   current.nombre = newStudent.nombre;
    //   current.apellidos = newStudent.apellidos;
    //   current.dni = newStudent.dni;
    //   current.hobbies = newStudent.hobbies;
    //   current.poblacion = newStudent.poblacion;
    //   current.sexo = newStudent.sexo;
    //   // Update
    // } else {
    //   // Insert
    // }
  }

  public DeleteStudent(id: string) {
    const student = this.GetAlumno(id);
    if (student !== null) {
      // Delete
    }
  }
>>>>>>> 752500d491f86f7d65bcad7ae7555ae7534dc2fc
}
