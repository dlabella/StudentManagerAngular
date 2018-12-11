import { HobbyService } from './../../shared/services/hobby.service';

import { Student } from './../../shared/models/student';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StudentService } from 'src/shared/services/student.service';

@Component({
  selector: 'app-student-template-data',
  templateUrl: './student-template-data.component.html',
  styleUrls: ['./student-template-data.component.css']
})
export class StudentTemplateDataComponent implements OnInit {

  student: Student;
  hobbies: any;

  @Input() enabled = true;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onFormSubmit: EventEmitter<any> = new EventEmitter<any>();

  studentService: StudentService;
  hobbyService: HobbyService;

  constructor(studentService: StudentService, hobbyService: HobbyService ) {
      this.studentService = studentService;
      this.student = new Student('', '', '', '', '', [], '');
      this.hobbyService = hobbyService;
  }

  ngOnInit(): void {
    this.studentService.GetStudents().subscribe
    (
        students => {
            this.student = students[0];
        },
        error => {
            console.log(error);
        }
    );
    this.hobbyService.GetHobbies().subscribe(
         hobbies => this.hobbies = hobbies
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
