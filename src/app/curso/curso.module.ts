import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListarCursoComponent} from './listar-curso/listar-curso.component';
import {RouterModule} from '@angular/router';
import {CursoRoutes} from './curso.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../app.module';
import {TagInputModule} from 'ngx-chips';
import {NouisliderModule} from 'ng2-nouislider';
import {CriarCursoComponent} from './criar-curso/criar-curso.component';
import {DetalharCursoComponent} from './detalhar-curso/detalhar-curso.component';
import {EditarCursoComponent} from './editar-curso/editar-curso.component';
import {AgendamentoAulaComponent} from "./agendamento-aula/agendamento-aula.component";

@NgModule({
    declarations: [ListarCursoComponent,
        CriarCursoComponent,
        DetalharCursoComponent,
        EditarCursoComponent,
        AgendamentoAulaComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        TagInputModule,
        NouisliderModule,
        FormsModule,
        RouterModule.forChild(CursoRoutes)
    ]
})
export class CursoModule {
}
