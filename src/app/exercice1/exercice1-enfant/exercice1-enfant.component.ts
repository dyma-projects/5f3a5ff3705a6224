import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  counter: number = 0;
  @Output() changCounter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  increment() {
    this.counter++;
    this.changCounter.emit({
      value: this.counter
    });
  }
  
  deincrement() {
    this.counter--;
    this.changCounter.emit({
      value: this.counter
    });
  }

}
