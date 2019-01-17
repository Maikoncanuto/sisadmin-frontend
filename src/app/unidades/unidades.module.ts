import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../app.module";
import {TagInputModule} from "ngx-chips";
import {NouisliderModule} from "ng2-nouislider";
import {RouterModule} from "@angular/router";
import {UnidadesRoutes} from "./unidades.routing";
import { ListagemComponent } from './listagem/listagem.component';
import { EditarComponent } from './editar/editar.component';
import { VisualizarComponent } from './visualizar/visualizar.component';

@NgModule({
  declarations: [CadastroComponent, ListagemComponent, EditarComponent, VisualizarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    TagInputModule,
    NouisliderModule,
    FormsModule,
    RouterModule.forChild(UnidadesRoutes)
  ]
})
export class UnidadesModule { }
