import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

 
  headers = new Headers();
  projects = [];
  numberOfProjects:number;

  url: string = "https://gestaostefanini.atlassian.net/rest/api/2/project/";

  constructor(private http: Http) {
    this.headers.append("Content-type", "application/json");
    this.headers.append("Authorization", "Basic " + "ZnBzb3V6YUBzdGVmYW5pbmkuY29tOk9sOUEzQmM1SEJmSDZNUW1SbXo3OEM1Nw==");
   }
  
   //
   buscar(){
    return this.http.get(this.url, { headers: this.headers })
        .subscribe(response => {
          this.projects=response.json();
          this.numberOfProjects=this.projects.length;
          console.log(this.projects);
          console.log("number of projects: "+this.numberOfProjects);
        });
}

}