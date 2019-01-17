import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private _router: Router,
              private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  cancelar(): void {
    this._router.navigate(['/unidades/listagem']);
  }

  salvar(): void {
    this._router.navigate(['/unidades/listagem']);
  }

  ngSubmit(): void {
    if(this.formGroup.invalid){
      return;
    }

    console.log(this.formGroup.value);
  }

  private createForm(): void {
    this.formGroup = this._formBuilder.group({
      razaoSocial: ['', [Validators.required, Validators.maxLength(100)]],
      nomeFantasia: ['', [Validators.required, Validators.maxLength(100)]],
      cnpj: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.maxLength(150), Validators.email]],
      telefone: ['', [Validators.required, Validators.maxLength(20)]],
      nomeResponsavel: ['', [Validators.required, Validators.maxLength(100)]],
      cep: ['', [Validators.required, Validators.maxLength(20)]],
      uf: ['', [Validators.required, Validators.maxLength(3)]],
      cidade: ['', [Validators.required, Validators.maxLength(100)]],
      logradouro: ['', [Validators.required, Validators.maxLength(200)]]
    });
  }

}
