import { Student } from './../models/student';
import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-student-template-data',
  templateUrl: './student-template-data.component.html',
  styleUrls: ['./student-template-data.component.css']
})
export class StudentTemplateDataComponent {

  student: Student = new Student();
  @Input() enabled = true;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onFormSubmit: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
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
      this.student = new Student();
  }
}
