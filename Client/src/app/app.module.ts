import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StudentTemplateDataComponent } from './student-template-data/student-template-data.component';
import { HobbyService } from './services/hobby.service';
import { StudentService } from './services/student.service';
import { SexoService } from './services/sexo.service';
import { PoblacionService } from './services/poblacion.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentTemplateDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HobbyService,
              StudentService,
              SexoService,
              PoblacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
