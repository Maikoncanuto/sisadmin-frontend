import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DataTable} from "../../shared/datatable.model";
import {Router} from "@angular/router";
import swal from 'sweetalert2';

declare const $: any;

@Component({
  selector: 'app-listagem',
  templateUrl: './listar-unidade.component.html',
  styleUrls: ['./listar-unidade.component.css']
})
export class ListarUnidadeComponent implements OnInit, AfterViewInit {
  public dataTable: DataTable;
  public search: string;

  constructor(private _router: Router) { }

  ngOnInit() {
    this.dataTable = {
      headerRow: [ 'Unidade', 'Telefone', 'Responsável', 'Cidade', 'Ações' ],
      footerRow: [ 'Unidade', 'Telefone', 'Responsável', 'Cidade', 'Ações' ],

      dataRows: [
        ['DJRadio - Águas Claras', '(61) 9 9797-9797', 'Paulo Amorim', 'Águas Claras'],
        ['DJRadio - Asa sul', '(61) 9 9797-9696', 'Carlos Magal', 'Asa sul'],
        ['DJRadio - Samambaia Sul', '(61) 9 9595-9797', 'Guilherme Santana', 'Samambaia Sul'],
        ['DJRadio - Ceilândia Norte', '(61) 9 9497-9497', 'Andressa Silva', 'Ceilândia Norte'],
        ['DJRadio - Asa norte', '(61) 9 9797-9191', 'Ana Clara', 'Asa norte'],
        ['DJRadio - Taguatinga', '(61) 9 9797-9191', 'Jhone Santos', 'Asa norte'],
        ['DJRadio - Gama', '(61) 9 9797-9191', 'Gabriela Schumman', 'Águas Claras'],
        ['DJRadio - Valparaíso', '(61) 9 9757-9691', 'Guilherme Neres', 'Gama'],
        ['DJRadio - Luaziânia', '(61) 9 9797-9697', 'Jéssica Fernandes', 'Luziânia'],
        ['DJRadio - Cristalina', '(61) 9 9797-9691', 'Fernandes frota', 'Asa sul'],
        ['DJRadio - Ceilândia Sul', '(61) 9 9797-9591', 'Marcos carolino', 'Sudoeste'],
        ['DJRadio - Samambaia Norte', '(61) 9 9797-9491', 'Eduardo monteiro', 'Taguatinga sul'],
        ['DJRadio - Sudoeste', '(61) 9 9797-9193', 'Claudinei Dantas', 'Samambaia Sul'],
        ['DJRadio - Cruzerio', '(61) 9 9797-912', 'Carlos Sakagushi', 'Taguatinga norte'],
      ]
    };
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
    this._router.navigate(['/unidades/criar-unidade']);
  }

  editar(row: any): void {
    this._router.navigate(['/unidades/editar-unidade']);
  }

  visualizar(row: any): void {
    this._router.navigate(['/unidades/detalhar-unidade']);
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
        infoFiltered: " do total de _MAX_ registros",
        sLoadingRecords: "Carregando...",
        sProcessing: "Processando...",
        sZeroRecords: "Nenhum registro encontrado",
        sSearch: "Pesquisar",
        oPaginate: {
          sNext: "Próximo",
          sPrevious: "Anterior",
          sFirst: "Primeiro",
          sLast: "Último"
        },
        oAria: {
          sSortAscending: ": Ordenar colunas de forma ascendente",
          sSortDescending: ": Ordenar colunas de forma descendente"
        }
      }
    });

    $('.card .material-datatables label').addClass('form-group');
  }

}
