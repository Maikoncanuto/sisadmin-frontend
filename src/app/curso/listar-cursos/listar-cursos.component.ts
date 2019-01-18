import { Component, OnInit } from '@angular/core';
import { DataTable } from 'src/app/shared/datatable.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent implements OnInit {
  colunas: string[] = [];
  dadosFakeCursos: any[] = [];
  public dataTable: DataTable;

  constructor(private _router: Router) { }

  ngOnInit() {
    this.dataTable = {
      headerRow: [ 'Curso', 'Carga Horaria', 
                   'Categoria', 'Valor Matricula',
                  'Valor Teste', 'Valor Total', 'Cartão De Crédito', 'Á Vista' ],
      footerRow: [ 'CURSO', 'CARGA HORARIA', 
      'CATEGORIA', 'VALOR MATRICULA',
     'VALOR TESTE', 'VALOR TOTAL', 'CARTÃO DE CRÉDITO', 'Á VISTA'],

      dataRows: [
        ['Aula de teclado', '50H', 'Musica', 'R$50', 'R$50', 'R$50', 'R$50', 'R$50'],
      ]
    };          
  }

  novo(): void{
    this._router.navigate(['/cursos/cadastro']);
  }
}
