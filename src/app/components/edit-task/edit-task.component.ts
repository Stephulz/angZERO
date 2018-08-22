import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  constructor(
    private taskService:TaskService,
    private activeRoute: ActivatedRoute,
  ) { }


  
  submitted = false;

  model = null;

  onSubmit(){
    this.submitted = true;
    console.log(this.model);
    this.editTask();
    
    alert("Editado com sucesso");
    location.reload();
  }

  buscarId() {
    this.taskService.buscarId(this.activeRoute.snapshot.params['id'], (task)=>{
      //debugger;
      //let asd = task;
      this.model = new Task(task.taskName, task.status);
    });
  }

  editTask(){
    this.taskService.editTask(this.activeRoute.snapshot.params['id'], this.model).subscribe();
    console.log("editTask method, routeID: "+this.activeRoute.snapshot.params['id'] +
    " Model name: "+ this.model.name+ " Model status: "+this.model.status);
  }

  ngOnInit() {
    this.buscarId();
    console.log("ROUTE PARAM:"+ this.activeRoute.snapshot.params['id']);
  }
}
