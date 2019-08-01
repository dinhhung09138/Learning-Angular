import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-sibling-one',
  templateUrl: './sibling-one.component.html',
  styleUrls: ['./sibling-one.component.css']
})
export class SiblingOneComponent implements OnInit {

  message: string;

  constructor(private dataService: ShareDataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(msg => this.message = msg);
  }

  onChangeMsg() {
    this.dataService.changeMessage(this.message);
  }

}
