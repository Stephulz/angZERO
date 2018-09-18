import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service'

@Component({
  selector: 'app-task-done',
  templateUrl: './task-done.component.html',
  styleUrls: ['./task-done.component.css']
})
export class TaskDoneComponent implements OnInit {

  private tasksDone = [];

  displayedColumns: string[] = ['id', 'taskName', 'status', 'Edit', 'Delete'];
  dataSource;

  constructor(
    private taskService:TaskService,
  ) { }

  buscarDone() {
    this.taskService.buscarDone((task)=>{
      this.tasksDone = task;
      console.log("Tasks: "+JSON.stringify(this.tasksDone));
      this.dataSource = task;
    });
  }

  ngOnInit() {
    this.buscarDone();
  }
}
