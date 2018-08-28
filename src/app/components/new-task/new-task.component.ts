import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service'
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  constructor(
    private taskService:TaskService,
  ) { }

  ngOnInit() {
  }

  model = new Task("","");
  submitted = false;

  onSubmit(){
    this.submitted = true;
    try{
      console.log(this.model);
      console.log(this.newTask(this.model));
      console.log(this.model.name);
      alert("Task cadastrada com sucesso");
    }catch(e){
    alert("Erro ao criar");
    }
  }

  get diagnostic() { return JSON.stringify(this.model); }

  newTask(task:Task) {
    this.taskService.newTask(task).subscribe();
  }

}
