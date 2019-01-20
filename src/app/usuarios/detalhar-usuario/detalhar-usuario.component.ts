import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-visualizar',
  templateUrl: './detalhar-usuario.component.html',
  styleUrls: ['./detalhar-usuario.component.css']
})
export class DetalharUsuarioComponent implements OnInit {

  formGroup: FormGroup;

  generoAtual: string;
  perfilAtual: string;
  estadoCivil: string;
  escolaridade: string;

  constructor(private _router: Router,
              private _formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  cancelar(): void {
    this._router.navigate(['/usuarios/listar-usuario']);
  }

  salvar(): void {
    this._router.navigate(['/usuarios/listar-usuario']);
  }

  generos = [
    {value: 'M', viewValue: 'Masculino'},
    {value: 'F', viewValue: 'Feminino'}
  ];

  perfis = [
    {value: 'ROLE_ALUNO', viewValue: 'Aluno'},
    {value: 'ROLE_PROFESSOR', viewValue: 'Professor'},
    {value: 'ROLE_DIRETOR_GERAL', viewValue: 'Diretor Geral'},
    {value: 'ROLE_FREELANCER', viewValue: 'Freenlancer'},
    {value: 'ROLE_RESPONSAVEL', viewValue: 'Responsável'},
    {value: 'ROLE_PRE_MATRICULA', viewValue: 'Pré-matricula'},
    {value: 'ROLE_ATENDENTE', viewValue: 'Atendente'},
    {value: 'ROLE_GERENTE', viewValue: 'Gerente'}
  ];

  estadosCivil = [
    {value: 'SOLTEIRO', viewValue: 'Solteiro'},
    {value: 'CASADO', viewValue: 'Casado'},
    {value: 'Divorciado', viewValue: 'Divorciado'}
  ];

  escolaridades = [
    {value: 'SUPERIOR_INCOMPLETO', viewValue: 'Superior incompleto'},
    {value: 'SUPERIOR_COMPLETO', viewValue: 'Superior completo'}
  ]

}
