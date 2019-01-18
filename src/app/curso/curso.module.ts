import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';
import { RouterModule } from '@angular/router';
import { CursoRoutes } from './curso.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { TagInputModule } from 'ngx-chips';
import { NouisliderModule } from 'ng2-nouislider';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';

@NgModule({
  declarations: [ListarCursosComponent, CriarCursoComponent],
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
export class CursoModule { }
