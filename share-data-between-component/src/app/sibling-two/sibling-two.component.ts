import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-sibling-two',
  templateUrl: './sibling-two.component.html',
  styleUrls: ['./sibling-two.component.css']
})
export class SiblingTwoComponent implements OnInit {

  message: string;

  constructor(private dataService: ShareDataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(msg => this.message = msg);
  }

}
