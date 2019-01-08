import { Component, OnInit } from '@angular/core';
import {UserTableModel} from '../../models/users/user-table.model';

@Component({
  selector: 'sisadmin-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserTableModel[] = [
    {name: 'Maikon canuto', profile: 'Administrador', responsibility: 'Gerente de unidade'},
    {name: 'Andressa schummam', profile: 'Usuário', responsibility: 'Supervisora'},
    {name: 'Paulo', profile: 'Administrador', responsibility: 'Proprietário'},
    ];

  public searchText: string;

  constructor() { }

  ngOnInit() {
  }

}
