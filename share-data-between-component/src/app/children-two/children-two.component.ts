import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-children-two',
  templateUrl: './children-two.component.html',
  styleUrls: ['./children-two.component.css']
})
export class ChildrenTwoComponent implements OnInit {

  @Input() message: string;
  childMessage: string;

  @Output() messageChangeEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onTextChange() {
    this.messageChangeEvent.emit(this.childMessage);
  }

}
