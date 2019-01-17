import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css']
})
export class VisualizarComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit() {
    this.createForm();
  }

  cancelar(): void {
    this._router.navigate(['/unidades/listagem']);
  }

  private createForm(): void {
    this.formGroup = this._formBuilder.group({
      razaoSocial: ['Americanas LTDA'],
      nomeFantasia: ['Americanas'],
      cnpj: ['59.192.034/0001-78'],
      email: ['teste@gmail.com'],
      telefone: ['(61) 9 9821-1212'],
      nomeResponsavel: ['Paulo amorim'],
      cep: ['72311-1212'],
      uf: ['DF'],
      cidade: ['Brasília'],
      logradouro: ['Asa norte, apartamento 12']
    });
  }
}
