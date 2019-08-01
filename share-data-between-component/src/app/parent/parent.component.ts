import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ChildrenOneComponent } from '../children-one/children-one.component';
import { ChildrenTwoComponent } from '../children-two/children-two.component';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {

  @ViewChild(ChildrenOneComponent, { static: true}) childOne;

  message = '';
  msgFromChildOne = '';
  msgFromChildTwo = '';
  msgFromService = '';

  constructor(private dataService: ShareDataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(msg => this.msgFromService = msg);
  }

  ngAfterViewInit() {
    this.msgFromChildOne = this.childOne.childOneMessage;
  }

  getChildTwoMessageChange(message: string) {
    this.msgFromChildTwo = message;
  }

  onSend() {
    console.log(this.message);
  }

}
