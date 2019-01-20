import {Routes} from "@angular/router";
import {CriarAtendimentoComponent} from "./criar-atendimento/criar-atendimento.component";
import {ListarAtendimentoComponent} from "./listar-atendimento/listar-atendimento.component";
import {EditarAtendimentoComponent} from "./editar-atendimento/editar-atendimento.component";
import {DetalharAtendimentoComponent} from "./detalhar-atendimento/detalhar-atendimento.component";
import {AgendamentoAulaComponent} from "../curso/agendamento-aula/agendamento-aula.component";
import {RelatoriosAtendimentoComponent} from "./relatorios-atendimento/relatorios-atendimento.component";

export const AtendimentoRoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'listar-atendimento',
            component: ListarAtendimentoComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'criar-atendimento',
            component: CriarAtendimentoComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'editar-atendimento',
            component: EditarAtendimentoComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'detalhar-atendimento',
            component: DetalharAtendimentoComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'relatorio-atendimento',
            component: RelatoriosAtendimentoComponent
        }]
    }
];