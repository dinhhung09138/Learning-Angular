import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalContentComponent } from '../modal-content/modal-content.component';


@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.css']
})
export class ModalContainerComponent implements OnInit {

  @ViewChild(ModalContentComponent, {static: true})

  message: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.message = 'Hello world';
  }

  openModal() {

    const modalRef = this.modalService.open(ModalContentComponent, { size: 'lg'});
    console.log('open modal: ', this.message);
    modalRef.componentInstance.message = this.message;

    // get data after modal close
    modalRef.result.then((result) => {
      if (result) {
        console.log('get data after modal close');
        console.log(result);
      }
    });

  }



}

