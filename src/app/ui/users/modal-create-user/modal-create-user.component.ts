import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'sisadmin-modal-create-user',
  templateUrl: './modal-create-user.component.html'
})
export class ModalCreateUserComponent implements OnInit {

  modalCreateForm: FormGroup;

  constructor(public modal: NgbActiveModal,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.modalCreateForm = this.formBuilder.group({
      name: '',
      profile: '',
      responsibility: ''
    });
  }
  private submitForm() {
    this.modal.close(this.modalCreateForm.value);
  }
}
