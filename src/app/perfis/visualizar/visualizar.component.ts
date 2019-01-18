import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css']
})
export class VisualizarComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private _router: Router) { }

  ngOnInit() {
  }

  cancelar(): void {
    this._router.navigate(['/perfis/listagem']);
  }

}
