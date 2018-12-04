import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StudentTemplateDataComponent } from './student-template-data/student-template-data.component';
import { FormsModule } from '@angular/forms';
import { HobbyService } from './../shared/services/hobby.service';
import { StudentService } from './../shared/services/student.service';
import { SexoService } from './../shared/services/sexo.service';
import { PoblacionService } from './../shared/services/poblacion.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentTemplateDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HobbyService,
              StudentService,
              SexoService,
              PoblacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
