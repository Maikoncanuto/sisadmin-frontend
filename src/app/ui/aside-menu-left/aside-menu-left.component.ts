import {Component, OnInit} from '@angular/core';
import {MenuContainer} from '../../models/menu-container.model';

@Component({
  selector: 'sisadmin-aside-menu-left',
  templateUrl: './aside-menu-left.component.html',
  styleUrls: ['./aside-menu-left.component.css']
})
export class AsideMenuLeftComponent implements OnInit {

  menu: MenuContainer = {
    home: 'Dashboard',
    iconsClass: 'menu-icon fa fa-laptop',
    categories: [
      {
        title: 'Cadastros',
        items: [
          {
            title: 'Usuário',
            iconsClass: 'menu-icon fa fa-cogs'
          },
          {
            title: 'Unidade',
            iconsClass: 'menu-icon fa fa-cogs',
            routerLinkUrl: 'algumacoisaqui'
          }
        ]
      }
    ]
  };

  constructor() {
  }

  ngOnInit() {

  }


}
