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

@NgModule({
  declarations: [
    AppComponent,
    StudentTemplateDataComponent
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
              HttpClientModule
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
