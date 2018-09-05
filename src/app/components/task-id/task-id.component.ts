import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Task } from '../../model/task';

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

  taskId:Task = new Task ("","","");

  buscarId() {
    this.taskService.buscarIdPut(this.activeRoute.snapshot.params['id'], (task)=>{
      //debugger;
      //let asd = task;
      this.taskId = new Task(this.activeRoute.snapshot.params['id'],task.taskName, task.status);
      console.log(this.taskId); 
    });
  }

  deletarTask(id:string){
    this.taskService.deleteTask(id).subscribe();
    alert("Task deletada com sucesso");
  }
  
  ngOnInit() {
    this.buscarId();
    console.log("ROUTE PARAM:"+ this.activeRoute.snapshot.params['id']);
  }
}
