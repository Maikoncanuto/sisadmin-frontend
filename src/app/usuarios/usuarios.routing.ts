import {Routes} from "@angular/router";
import {CriarUsuarioComponent} from "./criar-usuario/criar-usuario.component";
import {ListarUsuarioComponent} from "./listar-usuario/listar-usuario.component";
import {EditarUsuarioComponent} from "./editar-usuario/editar-usuario.component";
import {DetalharUsuarioComponent} from "./detalhar-usuario/detalhar-usuario.component";

export const UsuariosRoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'criar-usuario',
            component: CriarUsuarioComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'listar-usuario',
            component: ListarUsuarioComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'editar-usuario',
            component: EditarUsuarioComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'detalhar-usuario',
            component: DetalharUsuarioComponent
        }]
    }
];