import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-criar-atendimento',
  templateUrl: './criar-atendimento.component.html',
  styleUrls: ['./criar-atendimento.component.css']
})
export class CriarAtendimentoComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      nomeCliente: ['', Validators.required],
      tipoAtendimento: ['', Validators.required],
      telefone: [null],
      unidade: [null],
      email: [null],
      uf: [null],
      cidade: [null],
      comoDescobriu: [null],
      andamento: [null],
      propriedade: [null],
      interacao: [null],
    });
  }

  tiposAtendimento = [
    {value: 'Chat/Online', viewValue: 'Chat/Online'},
    {value: 'Whatsapp', viewValue: 'Whatsapp'},
    {value: 'Presencial', viewValue: 'Presencial'}
  ];

  unidadesFake = [
    {value: 'Brasília-DF', viewValue: 'Brasília-DF'},
    {value: 'Rio de Janeiro-RJ', viewValue: 'Rio de Janeiro-RJ'},
    {value: 'Belo Horizonte-BH', viewValue: 'Belo Horizonte-BH'},
    {value: 'São Paulo - SP', viewValue: 'São Paulo - SP'}
  ];

  andamentos = [
    {value: 'Fazer 1ª interação', viewValue: 'Fazer 1ª interação'},
    {value: 'Fazer 2ª interação', viewValue: 'Fazer 2ª interação'},
    {value: 'Aguardando retorno do cliente', viewValue: 'Aguardando retorno do cliente'},
    {value: 'Finalizado', viewValue: 'Finalizado'},
    {value: 'Enviar proposta', viewValue: 'Enviar proposta'},
    {value: 'Fazer ligação', viewValue: 'Fazer ligação'},
    {value: 'Matrícula realizada', viewValue: 'Matrícula realizada'}
  ];

  prioridades = [
    {value: 'Alta', viewValue: 'Alta'},
    {value: 'Média', viewValue: 'Média'},
    {value: 'Baixa', viewValue: 'Baixa'},

  ];

  cancelar(): void {
    this._router.navigate(['/atendimentos/listar-atendimento']);
  }

  salvar(): void {
    this._router.navigate(['/atendimentos/listar-atendimento']);
  }

  ngSubmit(): void {

  }

}
