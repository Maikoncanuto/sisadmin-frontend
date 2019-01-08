import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'sisadmin-modal-edit-role',
  templateUrl: './modal-edit-role.component.html'
})
export class ModalEditRoleComponent implements OnInit {

  constructor(public moda: NgbActiveModal) { }

  ngOnInit() {
  }

}
