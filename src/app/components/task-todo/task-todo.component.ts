import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service'

@Component({
  selector: 'app-task-todo',
  templateUrl: './task-todo.component.html',
  styleUrls: ['./task-todo.component.css']
})
export class TaskTodoComponent implements OnInit {

  private tasksTodo = [];

  displayedColumns: string[] = ['id', 'taskName', 'status', 'Edit', 'Delete'];
  dataSource;

  constructor(
    private taskService:TaskService,
  ) { }

  ngOnInit() {
    this.buscarTodo();
  }

  buscarTodo(){
    this.taskService.buscarTodo((task)=>{
      this.tasksTodo = task;
      console.log("Tasks: "+JSON.stringify(this.tasksTodo));
      this.dataSource = task;
    });
  }
  
  deletarTask(id:string){
    this.taskService.deleteTask(id).subscribe();
    alert("Task deletada com sucesso");
    location.reload();
  }

}