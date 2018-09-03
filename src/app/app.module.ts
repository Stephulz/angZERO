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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
