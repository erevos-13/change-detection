import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChildCounterComponent} from "../child-counter/child-counter.component";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, ChildCounterComponent],
  template: `
    <div>
      <h1>Counter Value: {{ this.counter }}</h1>
      <input
        type="button"
        (click)="this.updateCounter()"
        value="Update Counter"
      />
      <br/>
      <button (click)="updateColor()">update color</button>
      <app-child-counter [color]="color"></app-child-counter>
    </div>`,
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter = 0;
  color = ''

  updateCounter() {
    this.counter += 1;
  }

  updateColor() {
    this.color = 'blue'
  }

  constructor() {
  }

  ngOnInit(): void {
    console.log('CounterComponent rerender')

  }

}
