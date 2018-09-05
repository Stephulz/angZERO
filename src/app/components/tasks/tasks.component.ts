import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../model/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  private tasks = [];
  private status;

  displayedColumns: string[] = ['id', 'taskName', 'status', 'Edit', 'Delete'];
  dataSource;

  constructor(
    private taskService:TaskService,
  ) { }

  ngOnInit() {
    this.buscar();
  }

  buscar(){
    this.taskService.buscar((task)=>{
      this.tasks = task;
      console.log("Tasks: "+JSON.stringify(this.tasks));
      this.dataSource = task;
    });
  }
  
  deletarTask(id:string){
    this.taskService.deleteTask(id).subscribe();
    alert("Task deletada com sucesso");
    location.reload();
  }

}
