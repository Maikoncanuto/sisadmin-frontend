import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private _router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  cancelar(): void {
    this._router.navigate(['/perfis/listagem']);
  }

  salvar(): void {
    this._router.navigate(['/perfis/listagem']);
  }

  ngSubmit(): void {
    if(this.formGroup.invalid){
      return;
    }

    console.log(this.formGroup.value);
  }

  private createForm(): void {
    this.formGroup = this._formBuilder.group({
      nomePerfil: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

}
