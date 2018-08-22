import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(
    private taskService:TaskService,
  ) { }

  ngOnInit() {
    this.buscar();
  }

  buscar() {
    this.taskService.buscar();
     }
  
  deletarTask(id:string){
    this.taskService.deleteTask(id).subscribe();
    alert("Task deletada com sucesso");
    location.reload();
  }

}
