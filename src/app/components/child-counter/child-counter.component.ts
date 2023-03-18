import {AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-child-counter',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./child-counter.component.scss'],
  template: `
    <div style="border: 2px solid" [ngStyle]="{'border-color': color}">
      <h3>{{ this.executeFunction() }}</h3>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.Default
})
export class ChildCounterComponent implements OnInit, AfterViewInit {
  @Input() color: string | undefined;

  constructor() {
  }


  executeFunction() {
    console.log("ChildCounterComponent Rerendered");
    this.color = 'red'
    return `This is Child Component`;
  }

  ngAfterViewInit() {
    this.color = 'green'
  }

  ngOnInit(): void {
  }

}
