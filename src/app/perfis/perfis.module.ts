import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DetalharPerfilComponent} from './detalhar-perfil/detalhar-perfil.component';
import {ListarPerfilComponent} from './listar-perfil/listar-perfil.component';
import {CriarPerfilComponent} from './criar-perfil/criar-perfil.component';
import {EditarPerfilComponent} from './editar-perfil/editar-perfil.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../app.module";
import {TagInputModule} from "ngx-chips";
import {NouisliderModule} from "ng2-nouislider";
import {RouterModule} from "@angular/router";
import {PerfisRoutes} from "./perfis.routing";

@NgModule({
    declarations: [DetalharPerfilComponent, ListarPerfilComponent, CriarPerfilComponent, EditarPerfilComponent],
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
export class PerfisModule {
}
