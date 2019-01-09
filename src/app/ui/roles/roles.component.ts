import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalCreateRoleComponent} from './modal-create-role/modal-create-role.component';
import {ModalEditRoleComponent} from './modal-edit-role/modal-edit-role.component';
import {RoleModel} from '../../models/roles/role.model';
import {RolesService} from '../../services/roles.service';
import {ModalDetailRoleComponent} from './modal-detail-role/modal-detail-role.component';

@Component({
  selector: 'sisadmin-roles',
  templateUrl: './roles.component.html'
})
export class RolesComponent implements OnInit {

  roles: RoleModel[];

  public searchText: string;

  constructor(private _modalService: NgbModal,
              private _rolesService: RolesService) {
  }

  ngOnInit() {
    this._rolesService
      .findAll()
      .subscribe(roles => this.roles = roles);
  }
  openModalCreateRole(): void {
    const modal = this._modalService.open(ModalCreateRoleComponent, {centered: true, size: 'lg'});
    modal.result.then((result) => {
      this._rolesService
        .save({id: null, nome: result.nome, descricao: result.descricao, ativo: result.ativo})
        .subscribe(roles => this.roles = roles);
    }).catch((error) => {
    });
  }
  openModalDetailRole(role: RoleModel): void {
    const modal = this._modalService.open(ModalDetailRoleComponent, {centered: true, size: 'lg'});
    modal.componentInstance.role = role;
    modal.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
  openModalEditUser(role: RoleModel) {
    const modal = this._modalService.open(ModalEditRoleComponent, {centered: true, size: 'lg'});
    modal.componentInstance.role = role;
    modal.result.then((result) => {
      this._rolesService
        .update(role)
        .subscribe(roles => this.roles = roles);
    }).catch((error) => {
      console.log(error);
    });
  }
}
