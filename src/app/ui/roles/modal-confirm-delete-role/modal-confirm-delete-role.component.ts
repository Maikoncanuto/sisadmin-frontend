import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'sisadmin-modal-confirm-delete-role',
  templateUrl: './modal-confirm-delete-role.component.html'
})
export class ModalConfirmDeleteRoleComponent implements OnInit {

  @Input() role: any;

  constructor(public modal: NgbActiveModal) { }

  ngOnInit() {
  }

}
