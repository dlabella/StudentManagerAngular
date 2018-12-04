import { Student } from '../models/student';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public  GetStudents(): Array<Student> {
    const students = new Array<Student>();

    const s1 = new Student('Test 1', 'Apellidos 1', '', '', '', [], '');
    const s2 = new Student('Test 2', 'Apellidos 2', '', '', '', [], '');


    students.push(s1);
    students.push(s2);

    return students;
  }

  public  GetStudent(id: string): Student {
    const students = this.GetStudents();
    const filteredStudents = students.filter((student) => student.id === id);
    if (filteredStudents.length > 0) {
      return filteredStudents[0];
    } else {
      return null;
    }
  }

  public  SaveStudent(newStudent: Student): void {
    const students = this.GetStudents();
    const filteredStudents = students.filter((student) => student.id === newStudent.id);
    if (filteredStudents.length > 0) {
      const current = filteredStudents[0];
      current.nombre = newStudent.nombre;
      current.apellidos = newStudent.apellidos;
      current.dni = newStudent.dni;
      current.hobbies = newStudent.hobbies;
      current.poblacion = newStudent.poblacion;
      current.sexo = newStudent.sexo;
      // Update
    } else {
      // Insert
    }
  }

  public DeleteStudent(id: string) {
    const student = this.GetStudent(id);
    if (student !== null) {
      // Delete
    }
  }
}
