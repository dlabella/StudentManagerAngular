import { Poblacion } from './../../shared/models/poblacion';
import { PoblacionService } from './../../shared/services/poblacion.service';
import { HobbyService } from './../../shared/services/hobby.service';

import { Student } from './../../shared/models/student';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StudentService } from 'src/shared/services/student.service';
import { Hobby } from 'src/shared/models/hobby';

@Component({
  selector: 'app-student-template-data',
  templateUrl: './student-template-data.component.html',
  styleUrls: ['./student-template-data.component.css']
})
export class StudentTemplateDataComponent implements OnInit {

  student: Student;
  hobbies: Hobby[];
  poblaciones: Poblacion[];
  @Input() enabled = true;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onFormSubmit: EventEmitter<any> = new EventEmitter<any>();

  constructor(private studentService: StudentService,
              private hobbyService: HobbyService,
              private poblacionService: PoblacionService ) {
      this.studentService = studentService;
      this.student = new Student('', '', '', '', '', [], '');
      this.hobbyService = hobbyService;
      this.poblacionService = poblacionService;
  }

  ngOnInit(): void {
    this.studentService.GetStudents().subscribe(
        students => this.student = students[0]
    );
    this.hobbyService.GetHobbies().subscribe(
        hobbies => this.hobbies = hobbies
    );
    this.poblacionService.GetPoblaciones().subscribe(
        poblaciones => this.poblaciones = poblaciones
    );
  }

  private onSubmit(): void {
      if (typeof (this.student) === 'undefined') {
          alert('Form not Filled Up Properly');
      } else {
          alert('Data Is Correct');
          this.onFormSubmit.emit(this.student);
      }
  }
  
  private onClear(): void {
      this.student = new Student('', '', '', '', '', [], '');
  }
}
