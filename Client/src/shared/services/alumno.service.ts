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
}
