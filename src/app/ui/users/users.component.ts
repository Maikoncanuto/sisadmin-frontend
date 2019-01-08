import { Component, OnInit } from '@angular/core';
import {UserTableModel} from '../../models/users/user-table.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalConfirmDeleteUserComponent} from './modal-confirm-delete-user/modal-confirm-delete-user.component';

@Component({
  selector: 'sisadmin-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserTableModel[] = [
    {name: 'Maikon canuto', profile: 'Administrador', responsibility: 'Gerente de unidade'},
    {name: 'Andressa schummam', profile: 'Usuário', responsibility: 'Supervisora'},
    {name: 'Paulo', profile: 'Administrador', responsibility: 'Proprietário'},
    ];

  public searchText: string;

  constructor(private _modalService: NgbModal) { }

  ngOnInit() {
  }

  deleteUser(user: any) {
    this.users = this.users.filter(function(userTmp) {return userTmp.name !== user.name; });
  }

  openModalDeleteUser(user: any) {
    const modal = this._modalService.open(ModalConfirmDeleteUserComponent);
    modal.result.then((result) => {
      this.deleteUser(user);
    }).catch((error) => {
    });
  }
}


