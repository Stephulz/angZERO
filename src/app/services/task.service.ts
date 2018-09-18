import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BASE_API } from 'src/app/api-base';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:Http) { 

  }

   /** 
   * Busca todas as tasks
   */
  buscar(callback){
    return this.http.get(`/api/tasks`)
        .subscribe(response => {
          //this.tasks=response.json();
          let respTask = response.json();
          console.log("SERVICE LOG: "+response);
          callback(respTask);
    });
  }


   /** 
   * Busca tasks com status TODO
   */
  buscarTodo(callback){
    return this.http.get(`/api/tasks/status/todo`)
    .subscribe(response => {
      let respTaskTodo = response.json();
      console.log("SERVICE LOG: "+ response);
      callback(respTaskTodo);
    });
  }


    /** 
   * Busca tasks com status DONE
   */
  buscarDone(callback){
    return this.http.get(`/api/tasks/status/done`)
    .subscribe(response => {
      let respTaskDone = response.json();
      console.log("SERVICE LOG: "+ response);   
      callback(respTaskDone);
    });
  }


   /** 
   * Busca uma task por ID
   * @param id: ID da task
   * @param callback: atributo necessário para tornar um metodo asyncrono
   */
  buscarIdPut(id:string, callback){
    return this.http.get(`/api/task/${id}`)
    .subscribe(response => {
      //this.tasksId=response.json();
      // this.taskIdName=response.json()[0].taskName;
      // this.taskIdStatus=response.json()[0].status;
      // console.log(this.tasksId);
      // console.log(this.taskIdName);
      // console.log(this.taskIdStatus);
      let resp = response.json()[0];

      //Callback:
      //tipicamente passada como argumento de outra função e/ou chamada quando um evento for acontecido,
      // ou quando uma parte de código receber uma resposta de que estava à espera.
      callback(resp); 
    });
  }


   /** 
   * Busca uma task por ID
   * @param id: ID da task
   */
  /*
  buscarId(id:string){
    return this.http.get(`/api/task/${id}`)
    .subscribe(response => {
      this.tasksId=response.json();
    });
  }
  */

 /** 
   * Cria uma nova task
   * @param task: Objeto do tipo task(nome,status)
   */
  newTask(task:Task){
    return this.http.post(`/api/nova-tarefa`,task)
  }

   /** 
   * Edita uma task
   * @param id: ID da task a ser editada
   * @param task: Objeto do tipo task(nome,status)
   */
  editTask(id:string, task:Task){
    return this.http.put(`/api/atualizar-tarefa/${id}`,task)
  }

   /** 
   * Deleta uma task
   * @param id: ID da task a ser deletada
   */
  deleteTask(id:string){
    return this.http.delete(`/api/remover-tarefa/${id}`)
  }
}

