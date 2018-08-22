import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service'

@Component({
  selector: 'app-task-todo',
  templateUrl: './task-todo.component.html',
  styleUrls: ['./task-todo.component.css']
})
export class TaskTodoComponent implements OnInit {

  constructor(
    private taskService:TaskService,
  ) { }

  buscarTodo() {
    this.taskService.buscarTodo();
     }

  ngOnInit() {
    this.buscarTodo();
  }
}
