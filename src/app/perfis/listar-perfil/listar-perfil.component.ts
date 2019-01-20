import {AfterViewInit, Component, OnInit} from '@angular/core';
import swal from 'sweetalert2';
import {DataTable} from "../../shared/datatable.model";
import {Router} from "@angular/router";

declare const $: any;

@Component({
    selector: 'app-listagem',
    templateUrl: './listar-perfil.component.html',
    styleUrls: ['./listar-perfil.component.css']
})
export class ListarPerfilComponent implements OnInit, AfterViewInit {
    public dataTable: DataTable;
    public search: string;

    constructor(private _router: Router) {
    }

    ngOnInit() {
        this.dataTable = {
            headerRow: ['Nome do perfil', 'Descrição', 'Ações'],
            footerRow: ['Nome do perfil', 'Descrição', 'Ações'],

            dataRows: [
                ['ADMINISTRADOR', 'Administrador do sistema'],
                ['PROFESSOR', 'Professor presencial/ead'],
                ['ALUNO', 'Aluno normal'],
                ['GERENTE GERAL', 'Gerente geral'],
                ['ADMINISTRADOR UNIDADE', 'Administrador da unidade'],
                ['USUÁRIO', 'Usuário normal'],
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

    novo(): void {
        this._router.navigate(['/perfis/criar-perfil']);
    }

    editar(row: any): void {
        this._router.navigate(['/perfis/editar-perfil']);
    }

    visualizar(row: any): void {
        this._router.navigate(['/perfis/detalhar-perfil']);
    }
}
