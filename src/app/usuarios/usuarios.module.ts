import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CriarUsuarioComponent} from './criar-usuario/criar-usuario.component';
import {DetalharUsuarioComponent} from './detalhar-usuario/detalhar-usuario.component';
import {ListarUsuarioComponent} from './listar-usuario/listar-usuario.component';
import {EditarUsuarioComponent} from './editar-usuario/editar-usuario.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../app.module";
import {TagInputModule} from "ngx-chips";
import {NouisliderModule} from "ng2-nouislider";
import {RouterModule} from "@angular/router";
import {UsuariosRoutes} from "./usuarios.routing";

@NgModule({
  declarations: [CriarUsuarioComponent, DetalharUsuarioComponent, ListarUsuarioComponent, EditarUsuarioComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    TagInputModule,
    NouisliderModule,
    FormsModule,
    RouterModule.forChild(UsuariosRoutes)
  ]
})
export class UsuariosModule { }
