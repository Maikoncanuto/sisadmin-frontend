import { Component, OnInit } from '@angular/core';
import {UserTableModel} from '../../models/users/user-table.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalConfirmDeleteUserComponent} from './modal-confirm-delete-user/modal-confirm-delete-user.component';
import {ModalCreateUserComponent} from './modal-create-user/modal-create-user.component';
import {ModalEditUserComponent} from './modal-edit-user/modal-edit-user.component';

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

  deleteUser(user: any): void {
    this.users = this.users.filter(function(userTmp) {return userTmp.name !== user.name; });
  }

  openModalDeleteUser(user: any): void {
    const modal = this._modalService.open(ModalConfirmDeleteUserComponent, {centered: true});
    modal.result.then((result) => {
      this.deleteUser(user);
    }).catch((error) => {
    });
  }

  openModalCreateUser(): void {
    const modal = this._modalService.open(ModalCreateUserComponent, {size: 'lg', centered: true});
    modal.result.then((result) => {
      const usersTmp = this.users;
      usersTmp.push({name: result.name, profile: result.profile, responsibility: result.responsibility});
      this.users = usersTmp;
    }).catch((error) => {
    });
  }

  openModalEditUser(user: any): void {
    const modal = this._modalService.open(ModalEditUserComponent, {size: 'lg', centered: true});
    modal.componentInstance.user = user;
    modal.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
}


