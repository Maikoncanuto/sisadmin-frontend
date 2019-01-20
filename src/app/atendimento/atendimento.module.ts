import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CriarAtendimentoComponent} from './criar-atendimento/criar-atendimento.component';
import {ListarAtendimentoComponent} from './listar-atendimento/listar-atendimento.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../app.module';
import {TagInputModule} from 'ngx-chips';
import {NouisliderModule} from 'ng2-nouislider';

import {AtendimentoRoutes} from './atendimento.routing';
import {EditarAtendimentoComponent} from './editar-atendimento/editar-atendimento.component';
import {DetalharAtendimentoComponent} from './detalhar-atendimento/detalhar-atendimento.component';
import { RelatoriosAtendimentoComponent } from './relatorios-atendimento/relatorios-atendimento.component';

@NgModule({
    declarations: [CriarAtendimentoComponent,
        ListarAtendimentoComponent,
        EditarAtendimentoComponent,
        DetalharAtendimentoComponent,
        RelatoriosAtendimentoComponent,],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        TagInputModule,
        NouisliderModule,
        FormsModule,
        RouterModule.forChild(AtendimentoRoutes)
    ]
})
export class AtendimentoModule {
}
