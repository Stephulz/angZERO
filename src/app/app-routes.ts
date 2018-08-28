import { Routes, RouterModule } from '@angular/router';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskTodoComponent } from './components/task-todo/task-todo.component';
import { TaskDoneComponent } from './components/task-done/task-done.component';
import { TaskIdComponent } from './components/task-id/task-id.component';
import { FormCadComponent } from './form-cad/form-cad.component';

import { ModuleWithProviders } from '@angular/core';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';


  /**ROUTES:
   * Define as rotas para os componentes, onde
   * @param path: é o caminho na url ex: http://localhost:4300/helloWorld
   * @param component: é o nome do componente (definido nos imports acima)
   */

export const ROUTES: Routes = [
    {
        path: '',
        component: HelloWorldComponent
    },
    {
        path: 'hello-world',
        component: HelloWorldComponent
    },
    {
        path: 'tasks',
        component: TasksComponent
    },
    {
        path: 'tasks/status/todo',
        component: TaskTodoComponent
    },
    {
        path: 'tasks/status/done',
        component: TaskDoneComponent
    },
    {
        path: 'tasks/new',
        component: NewTaskComponent
    },
    {
        path: 'tasks/:id',
        component: TaskIdComponent
    },
    {
        path: 'tasks/edit/:id',
        component: EditTaskComponent
    },
    {
        path: 'cadastro',
        component: FormCadComponent
    },
    

]

export const routes:ModuleWithProviders = RouterModule.forRoot(ROUTES); 