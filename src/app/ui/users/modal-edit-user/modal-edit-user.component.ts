import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'sisadmin-modal-edit-user',
  templateUrl: './modal-edit-user.component.html',
  styleUrls: ['./modal-edit-user.component.css']
})
export class ModalEditUserComponent implements OnInit {

  @Input() user: any;

  modalEditForm: FormGroup;

  constructor(public modal: NgbActiveModal,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.modalEditForm = this.formBuilder.group({
      name: '',
      profile: '',
      responsibility: ''
    });
  }
  private submitForm() {
    this.modal.close(this.modalEditForm.value);
  }
}
