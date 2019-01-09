import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {RoleModel} from '../../../models/roles/role.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'sisadmin-modal-edit-role',
  templateUrl: './modal-edit-role.component.html'
})
export class ModalEditRoleComponent implements OnInit {

  @Input() role: RoleModel;

  modalEditForm: FormGroup;

  constructor(public modal: NgbActiveModal,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  submitForm() {
    if (this.modalEditForm.invalid) {
      return;
    }

    this.role.nome = this.modalEditForm.controls.nome.value;
    this.role.descricao = this.modalEditForm.controls.descricao.value;
    this.role.ativo = this.modalEditForm.controls.ativo.value;

    this.modal.close(this.role);
  }

  private createForm(): void {
    this.modalEditForm = this.formBuilder.group({
      nome: [this.role.nome, Validators.required],
      descricao: [this.role.descricao, Validators.required],
      ativo: this.role.ativo
    });
  }
}
