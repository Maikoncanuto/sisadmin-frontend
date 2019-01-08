import {Component, Input, OnInit} from '@angular/core';
import {RoleModel} from '../../../models/roles/role.model';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'sisadmin-modal-detail-role',
  templateUrl: './modal-detail-role.component.html',
  styleUrls: ['./modal-detail-role.component.css']
})
export class ModalDetailRoleComponent implements OnInit {

  @Input() role: RoleModel;

  constructor(public modal: NgbActiveModal) { }

  ngOnInit() {
  }

}
