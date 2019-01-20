import {Routes} from "@angular/router";
import {ListarCursoComponent} from "./listar-curso/listar-curso.component";
import {CriarCursoComponent} from "./criar-curso/criar-curso.component";
import {EditarCursoComponent} from "./editar-curso/editar-curso.component";
import {DetalharCursoComponent} from "./detalhar-curso/detalhar-curso.component";
import {AgendamentoAulaComponent} from "./agendamento-aula/agendamento-aula.component";

export const CursoRoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'listar-curso',
            component: ListarCursoComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'criar-curso',
            component: CriarCursoComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'editar-curso',
            component: EditarCursoComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'detalhar-curso',
            component: DetalharCursoComponent
        }]
    },{
        path: '',
        children: [{
            path: 'agendar-aula',
            component: AgendamentoAulaComponent
        }]
    }
];