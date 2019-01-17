import {Routes} from "@angular/router";
import {CadastroComponent} from "./cadastro/cadastro.component";
import {ListagemComponent} from "./listagem/listagem.component";
import {EditarComponent} from "./editar/editar.component";
import {VisualizarComponent} from "./visualizar/visualizar.component";

export const UsuariosRoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'cadastro',
            component: CadastroComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'listagem',
            component: ListagemComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'editar',
            component: EditarComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'visualizar',
            component: VisualizarComponent
        }]
    }
];