import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-editar',
  templateUrl: './editar-unidade.component.html',
  styleUrls: ['./editar-unidade.component.css']
})
export class EditarUnidadeComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit() {
    this.createForm();
  }

  cancelar(): void {
    this._router.navigate(['/unidades/listar-unidade']);
  }

  salvar(): void {
    this._router.navigate(['/unidades/listar-unidade']);
  }

  ngSubmit(): void {
    if(this.formGroup.invalid){
      return;
    }

    console.log(this.formGroup.value);
  }

  private createForm(): void {
    this.formGroup = this._formBuilder.group({
      razaoSocial: [this._route.snapshot.paramMap.get('razaoSocial'), [Validators.required, Validators.maxLength(100)]],
      nomeFantasia: [this._route.snapshot.paramMap.get('nomeFantasia'), [Validators.required, Validators.maxLength(100)]],
      cnpj: [this._route.snapshot.paramMap.get('cnpj'), [Validators.required, Validators.maxLength(20)]],
      email: [this._route.snapshot.paramMap.get('email'), [Validators.required, Validators.maxLength(150), Validators.email]],
      telefone: [this._route.snapshot.paramMap.get('telefone'), [Validators.required, Validators.maxLength(20)]],
      nomeResponsavel: [this._route.snapshot.paramMap.get('nomeResponsavel'), [Validators.required, Validators.maxLength(100)]],
      cep: [this._route.snapshot.paramMap.get('cep'), [Validators.required, Validators.maxLength(20)]],
      uf: [this._route.snapshot.paramMap.get('uf'), [Validators.required, Validators.maxLength(3)]],
      cidade: [this._route.snapshot.paramMap.get('cidade'), [Validators.required, Validators.maxLength(100)]],
      logradouro: [this._route.snapshot.paramMap.get('logradouro'), [Validators.required, Validators.maxLength(200)]]
    });
  }

}
