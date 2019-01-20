import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CriarUnidadeComponent} from './criar-unidade/criar-unidade.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../app.module";
import {TagInputModule} from "ngx-chips";
import {NouisliderModule} from "ng2-nouislider";
import {RouterModule} from "@angular/router";
import {UnidadesRoutes} from "./unidades.routing";
import {ListarUnidadeComponent} from './listar-unidade/listar-unidade.component';
import {EditarUnidadeComponent} from './editar-unidade/editar-unidade.component';
import {DetalharUnidadeComponent} from './detalhar-unidade/detalhar-unidade.component';

@NgModule({
    declarations: [CriarUnidadeComponent, ListarUnidadeComponent, EditarUnidadeComponent, DetalharUnidadeComponent],
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
export class UnidadesModule {
}
