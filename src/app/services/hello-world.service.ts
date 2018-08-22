import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BASE_API } from 'src/app/api-base';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  constructor(private http:Http) { }

  helloWorld:string;

  buscar(){
    return this.http.get(`${BASE_API}/hello-world`)
        .subscribe(response => {
          this.helloWorld=response.json().foo;
          console.log(this.helloWorld);
        });
  }
}
