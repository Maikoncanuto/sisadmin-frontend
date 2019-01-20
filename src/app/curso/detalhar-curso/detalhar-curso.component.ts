import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-visualizar',
  templateUrl: './detalhar-curso.component.html',
  styleUrls: ['./detalhar-curso.component.css']
})
export class DetalharCursoComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  cancelar(): void {
    this._router.navigate(['/cursos/listar-curso']);
  }

}
