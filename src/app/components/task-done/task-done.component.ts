import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service'

@Component({
  selector: 'app-task-done',
  templateUrl: './task-done.component.html',
  styleUrls: ['./task-done.component.css']
})
export class TaskDoneComponent implements OnInit {

  constructor(
    private taskService:TaskService,
  ) { }

  buscarDone() {
    this.taskService.buscarDone();
     }

  ngOnInit() {
    this.buscarDone();
  }
}
