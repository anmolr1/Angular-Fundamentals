import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>{{name}}</h2>
  <button (click)="emitMessage()">Send Event</button>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input('parentData') public name: any;
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  emitMessage(){
    //alert('Emit Message');
    this.childEvent.emit('Hello my world app');
  }
}
