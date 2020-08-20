import { Component, OnInit } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public result: number = 0; 

  constructor() { }

  ngOnInit() {
  }

  counterUpdate(event) {
    this.result = event.value;
  }

}
