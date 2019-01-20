import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

declare const require: any;

declare const $: any;

@Component({
  selector: 'app-cadastro',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.css'],
  styles: [`md-calendar {
      width: 300px;
  }`]
})
export class CriarUsuarioComponent implements OnInit {

  formGroup: FormGroup;

  generoAtual: string;
  perfilAtual: string;
  estadoCivil: string;
  escolaridade: string;

  constructor(private _router: Router,
              private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  cancelar(): void {
    this._router.navigate(['/usuarios/listar-usuario']);
  }

  salvar(): void {
    this._router.navigate(['/usuarios/listar-usuario']);
  }

  ngSubmit(): void {
    if(this.formGroup.invalid){
      return;
    }

    console.log(this.formGroup.value);
  }

  private createForm(): void {
    this.formGroup = this._formBuilder.group({
      nomeCompleto: [''],
      nomeUsuario: [''],
      senha: [''],
      email: [''],
      cpf: [''],
      rg: [''],
      genero: [''],
      perfil: [''],
      estadoCivil: [''],
      orgaoEmissor: [''],
      dataExpedicao: [''],
      dataEmissao: [''],
      dataNascimento: [''],
      naturalidade: [''],
      nacionalidade: [''],
      dataRegistro: ['', []],
      telefone: [''],
      profissao: ['', []],
      logradouro: [''],
      cep: [''],
      rua: [''],
      bairro: [''],
      cidade: [''],
      uf: [''],
      escolaridade: ['']
    });
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
