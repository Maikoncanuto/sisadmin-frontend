import {Routes} from "@angular/router";
import {CriarUnidadeComponent} from "./criar-unidade/criar-unidade.component";
import {ListarUnidadeComponent} from "./listar-unidade/listar-unidade.component";
import {EditarUnidadeComponent} from "./editar-unidade/editar-unidade.component";
import {DetalharUnidadeComponent} from "./detalhar-unidade/detalhar-unidade.component";

export const UnidadesRoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'criar-unidade',
            component: CriarUnidadeComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'listar-unidade',
            component: ListarUnidadeComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'editar-unidade',
            component: EditarUnidadeComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'detalhar-unidade',
            component: DetalharUnidadeComponent
        }]
    }
];