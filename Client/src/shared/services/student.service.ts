import { Student } from '../models/student';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { inherits } from 'util';
import { ServiceBase } from './serviceBase';

@Injectable()

export class StudentService extends ServiceBase {

  constructor(httpClient: HttpClient) {
    super('http://127.0.0.1:3000/', httpClient);
  }

  public GetStudents(): Observable<Student[]> {
    return this.apiGetCall('student');
  }

  public  GetStudent(id: string): Observable<Student> {
    return this.apiGetCall('student/' + id);
  }

  public  SaveStudent(newStudent: Student): void {
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
    const student = this.GetStudent(id);
    if (student !== null) {
      // Delete
    }
  }
}
