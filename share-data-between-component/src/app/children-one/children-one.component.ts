import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-children-one',
  templateUrl: './children-one.component.html',
  styleUrls: ['./children-one.component.css']
})
export class ChildrenOneComponent implements OnInit {

  @Input() message: string;

  childOneMessage = 'sdfas asdfs';

  constructor() { }

  ngOnInit() {
  }

}
