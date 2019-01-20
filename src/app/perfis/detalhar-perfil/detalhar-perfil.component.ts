import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-visualizar',
  templateUrl: './detalhar-perfil.component.html',
  styleUrls: ['./detalhar-perfil.component.css']
})
export class DetalharPerfilComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  cancelar(): void {
    this._router.navigate(['/perfis/listar-perfil']);
  }

}
