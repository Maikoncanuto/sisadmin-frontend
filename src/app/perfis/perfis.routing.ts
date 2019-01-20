import {Routes} from "@angular/router";
import {CriarPerfilComponent} from "./criar-perfil/criar-perfil.component";
import {ListarPerfilComponent} from "./listar-perfil/listar-perfil.component";
import {EditarPerfilComponent} from "./editar-perfil/editar-perfil.component";
import {DetalharPerfilComponent} from "./detalhar-perfil/detalhar-perfil.component";

export const PerfisRoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'criar-perfil',
            component: CriarPerfilComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'listar-perfil',
            component: ListarPerfilComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'editar-perfil',
            component: EditarPerfilComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'detalhar-perfil',
            component: DetalharPerfilComponent
        }]
    }
];