import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DataTable} from "../../shared/datatable.model";
import {Router} from "@angular/router";
import swal from 'sweetalert2';

declare const $: any;

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit, AfterViewInit {

  public dataTable: DataTable;
  public search: string;

  constructor(private _router: Router) { }

  ngOnInit() {
    this.dataTable = {
      headerRow: [ 'Nome', 'Nível de acesso', 'E-mail', 'Telefone', 'Ações' ],
      footerRow: [ 'Nome', 'Nível de acesso', 'E-mail', 'Telefone', 'Ações' ],

      dataRows: [
        ['Carlos Magno Santos', 'ADMINISTRADOR', 'carlosmagno@gmail.com', '(61) 9 9898-9898'],
        ['Jennifer Carolina Almeida', 'USUÁRIO', 'jennifer_tinder@gmail.com', '(61) 9 9897-9798'],
        ['Maikon Silva Santos', 'PROFESSOR', 'maikon_professor@hotmail.com', '(61) 9 9896-9698'],
        ['Andressa Smith', 'ADMINISTRADOR', 'andressa_smith@gmail.com', '(61) 9 9595-9595'],
        ['Claudinei Dantas', 'USUÁRIO', 'claudineidantas@gmail.com', '(61) 9 9797-7997'],
        ['Rony da Silva Santos', 'ALUNO', 'rony@gmail.com', '(61) 9 9898-9898']
      ]
    };
  }

  ngAfterViewInit() {
    $('#datatables').DataTable({
      "pagingType": "full_numbers",
      responsive: true,
      language: {
        search: this.search,
        searchPlaceholder: "Termo da busca",
        lengthMenu: "_MENU_ Registros por página",
        zeroRecords: "Não existem registros!",
        info: "Mostrando página _PAGE_ de _PAGES_",
        infoEmpty: "Não existem registros!",
        infoFiltered: "Filtrado do total de _MAX_ registros"
      }
    });

    $('.card .material-datatables label').addClass('form-group');
  }

  abrirModalExcluir(): void {
    swal({
      title: 'Você deseja excluir o registro?',
      text: 'Você não poderá recuperar as informações!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Não, manter!',
      confirmButtonClass: "btn btn-success",
      cancelButtonClass: "btn btn-danger",
      buttonsStyling: false
    }).then((result) => {
      if (result.value) {
        const table = $('#datatables').DataTable();
        // Delete a record
        table.on('click', '.remove', function(e) {
          const $tr = $(this).closest('tr');
          table.row($tr).remove().draw();
          e.preventDefault();
        });

        swal({
          title: 'Deletado!',
          text: 'O registro foi deletado com sucesso.',
          type: 'success',
          confirmButtonClass: "btn btn-success",
          buttonsStyling: false
        }).catch(swal.noop)
      } else {
        swal({
          title: 'Cancelado',
          text: 'Seu registro está seguro :)!',
          type: 'error',
          confirmButtonClass: "btn btn-info",
          buttonsStyling: false
        }).catch(swal.noop)
      }
    })
  }

  novo(): void{
    this._router.navigate(['/usuarios/cadastro']);
  }

  editar(row: any): void {
    this._router.navigate(['/usuarios/editar']);
  }

  visualizar(row: any): void {
    this._router.navigate(['/usuarios/visualizar']);
  }

}
