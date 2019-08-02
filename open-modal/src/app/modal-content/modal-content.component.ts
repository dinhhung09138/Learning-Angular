import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {
  @Input() message: string;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
    console.log(this.message);
  }

  passBack() {

    // Send back data after modal close
    this.activeModal.close(this.message);
  }

}
