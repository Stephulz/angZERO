import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app-routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskTodoComponent } from './components/task-todo/task-todo.component';
import { TaskDoneComponent } from './components/task-done/task-done.component';
import { TaskIdComponent } from './components/task-id/task-id.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';


//ANGULAR MATERIAL
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//Table
import {MatTableModule} from '@angular/material/table';
//Button
import {MatButtonModule} from '@angular/material/button';
//Card
import {MatCardModule} from '@angular/material/card';
//Form-field
import {MatFormFieldModule} from '@angular/material/form-field';
//Select (mat-option)
import {MatSelectModule} from '@angular/material/select';
//Form
import {MatInputModule} from '@angular/material';
//Radio button
import {MatRadioModule} from '@angular/material/radio';


  /**APP MODULE:
   * Arquivo de configuração geral, onde ocorrem as definições de bibliotecas e componentes
   * @param imports: Bibliotecas
   * @param declarations: Componentes
   */


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    TaskTodoComponent,
    TasksComponent,
    TaskDoneComponent,
    TaskIdComponent,
    NewTaskComponent,
    EditTaskComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routes,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
