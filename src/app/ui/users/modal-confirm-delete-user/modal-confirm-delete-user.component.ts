import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'sisadmin-modal-confirm-delete-user',
  templateUrl: './modal-confirm-delete-user.component.html'
})
export class ModalConfirmDeleteUserComponent implements OnInit {

  constructor(public modal: NgbActiveModal) { }

  ngOnInit() {
  }
}
