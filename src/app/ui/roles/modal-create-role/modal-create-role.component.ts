import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'sisadmin-modal-create-role',
  templateUrl: './modal-create-role.component.html'
})
export class ModalCreateRoleComponent implements OnInit {

  modalCreateForm: FormGroup;

  constructor(public modal: NgbActiveModal,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  submitForm() {
    if (this.modalCreateForm.invalid) {
      return;
    }

    this.modal.close(this.modalCreateForm.value);
  }

  private createForm(): void {
    this.modalCreateForm = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      ativo: true
    });
  }
}
