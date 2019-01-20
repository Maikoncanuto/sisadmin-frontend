import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DataTable} from 'src/app/shared/datatable.model';
import {Router} from '@angular/router';

import swal from 'sweetalert2';

declare const $: any;

@Component({
    selector: 'app-listar-cursos',
    templateUrl: './listar-curso.component.html',
    styleUrls: ['./listar-curso.component.css']
})
export class ListarCursoComponent implements OnInit, AfterViewInit {

    public dataTable: DataTable;
    public search: string;

    constructor(private _router: Router) {
    }

    ngOnInit() {
        this.dataTable = {
            headerRow: ['Curso', 'Carga horária', 'Categoria', 'Valor matrícula', 'Ações'],
            footerRow: ['Curso', 'Carga horária', 'Categoria', 'Valor matrícula', 'Ações'],

            dataRows: [
                ['Aula de teclado', '510H', 'Música', 'R$1.000,00', ''],
                ['Aula de piano', '14H', 'Instrumentos', 'R$2.000,00', ''],
                ['Aula de canto', '22h', 'Música', 'R$5.123,00', ''],
                ['Aula de bateria', '150h', 'Instrumentos', 'R$5.129,00', ''],
                ['Aula de violão', '50h', 'Instrumentos', 'R$10.000,00', ''],
                ['Aula de DJ', '250h', 'Músiac', 'R$50', ''],
            ]
        };
    }

    novo(): void {
        this._router.navigate(['/cursos/criar-curso']);
    }

    editar(row: any): void {
        this._router.navigate(['/cursos/editar-curso']);
    }

    visualizar(row: any): void {
        this._router.navigate(['/cursos/detalhar-curso']);
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
                table.on('click', '.remove', function (e) {
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
}
