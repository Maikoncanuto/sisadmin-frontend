import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private _router: Router) { }

  ngOnInit() {
      this.formGroup = this._formBuilder.group({
        nomeCurso: ['', Validators.required],
        disponibilidade: ['', Validators.required],
        categoriaCurso: ['', Validators.required]
      });
  }

  opcoesDisponibilidade = [
    {value: 'disponivel', viewValue: 'SIM'},
    {value: 'indisponivel', viewValue: 'NÄO'}
  ];

  categoriasCurso = [
    {value: 'audio', viewValue: 'Audio'},
    {value: 'video', viewValue: 'Video'},
    {value: 'musica', viewValue: 'Musica'}
  ];

  cancelar(): void {
    this._router.navigate(['/cursos/listar-curso']);
  }

  salvar(): void {
    this._router.navigate(['/cursos/listar-curso']);
  }
}
