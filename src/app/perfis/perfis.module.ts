import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualizarComponent } from './visualizar/visualizar.component';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EditarComponent } from './editar/editar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../app.module";
import {TagInputModule} from "ngx-chips";
import {NouisliderModule} from "ng2-nouislider";
import {RouterModule} from "@angular/router";
import {PerfisRoutes} from "./perfis.routing";

@NgModule({
  declarations: [VisualizarComponent, ListagemComponent, CadastroComponent, EditarComponent],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      MaterialModule,
      TagInputModule,
      NouisliderModule,
      FormsModule,
      RouterModule.forChild(PerfisRoutes)
  ]
})
export class PerfisModule { }
