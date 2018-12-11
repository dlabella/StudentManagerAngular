<<<<<<< HEAD
=======
import { AlumnoService } from './../shared/services/alumno.service';
>>>>>>> 752500d491f86f7d65bcad7ae7555ae7534dc2fc
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
import { AgregarAlumnoComponent } from './agregar-alumno/agregar-alumno.component';
import { AlumnoComponent } from './alumno/alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentTemplateDataComponent,
    AgregarAlumnoComponent,
    AlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HobbyService,
              StudentService,
              SexoService,
              PoblacionService,
              HttpClientModule,
              AlumnoService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
