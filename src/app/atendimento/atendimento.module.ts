import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarAtendimentoComponent } from './criar-atendimento/criar-atendimento.component';
import { ListarAtendimentoComponent } from './listar-atendimento/listar-atendimento.component';

@NgModule({
  declarations: [CriarAtendimentoComponent, ListarAtendimentoComponent],
  imports: [
    CommonModule
  ]
})
export class AtendimentoModule { }
