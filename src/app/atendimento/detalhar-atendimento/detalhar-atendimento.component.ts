import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-detalhar-atendimento',
  templateUrl: './detalhar-atendimento.component.html',
  styleUrls: ['./detalhar-atendimento.component.css']
})
export class DetalharAtendimentoComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  cancelar(): void {
    this._router.navigate(['/atendimentos/listar-atendimento']);
  }

}
