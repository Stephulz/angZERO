import { Component, OnInit } from '@angular/core';
import { HelloWorldService } from 'src/app/services/hello-world.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  constructor(
    private helloWorldService: HelloWorldService,
  ) { }

  buscar() {
    this.helloWorldService.buscar();
     }

  ngOnInit() {
    this.buscar();
  }

}
