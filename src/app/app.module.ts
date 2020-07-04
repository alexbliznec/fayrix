import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { DataService } from './services/data-service/data.service';
import { AgGridModule } from 'ag-grid-angular';
import { DeleteButtonComponent } from './components/delete-button/delete-button.component';
import { DataInterceptor } from './interceptors/data.interceptor';
import { AddAnimalComponent } from './components/add-animal/add-animal.component';
import { FormInputComponent } from './components/shared/form-input/form-input.component';
import { AppInfoComponent } from './components/app-info/app-info.component';
import { ButtonComponent } from './components/shared/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    DeleteButtonComponent,
    AddAnimalComponent,
    FormInputComponent,
    AppInfoComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([])
  ],
  entryComponents: [
    DeleteButtonComponent
  ],
  providers: [
    DataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DataInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
