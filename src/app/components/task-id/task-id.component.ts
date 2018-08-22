import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-id',
  templateUrl: './task-id.component.html',
  styleUrls: ['./task-id.component.css']
})
export class TaskIdComponent implements OnInit {

  constructor(
    private taskService:TaskService,
    private activeRoute: ActivatedRoute,
  ) { }

  taskID = [];

  buscarId() {
    this.taskService.buscarId(this.activeRoute.snapshot.params['id']);
  }

  ngOnInit() {
    this.buscarId();
    console.log("ROUTE PARAM:"+ this.activeRoute.snapshot.params['id']);
  }
}
