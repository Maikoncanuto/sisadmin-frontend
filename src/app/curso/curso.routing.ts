import {Routes} from "@angular/router";
import { ListarCursosComponent } from "./listar-cursos/listar-cursos.component";
import { CriarCursoComponent } from "./criar-curso/criar-curso.component";

export const CursoRoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'listagem',
            component: ListarCursosComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'cadastro',
            component: CriarCursoComponent
        }]
    },
];