import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalContentComponent } from '../modal-content/modal-content.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.css']
})
export class ModalContainerComponent implements OnInit {

  public user = {
    name: 'Izzat Nadiri',
    age: 26
    };

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openModal() {

    const modalRef = this.modalService.open(ModalContentComponent);

    // modalRef.componentInstance.user = this.user;

    // modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
    //   console.log(receivedEntry);
    // });
  }



}

