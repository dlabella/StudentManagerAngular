import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-template-data',
  templateUrl: './student-template-data.component.html',
  styleUrls: ['./student-template-data.component.css']
})
export class StudentTemplateDataComponent {
  private _model: any = {};
  @Input() enabled = true;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onFormSubmit: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
  }
  private onSubmit(firstName: string, lastName: string, email: string): void {
      this._model.firstName = firstName;
      this._model.lastName = lastName;
      this._model.email = email;
      if (typeof (this._model) === 'undefined') {
          alert('Form not Filled Up Properly');
      } else {
          alert('Data Is Correct');
          this.onFormSubmit.emit(this._model);
      }
  }
  private onClear(): void {
      this._model = {};
  }
}
