import {Component, OnInit} from '@angular/core';
import {MenuContainer} from '../../models/menu-container.model';

@Component({
  selector: 'sisadmin-aside-menu-left',
  templateUrl: './aside-menu-left.component.html',
  styleUrls: ['./aside-menu-left.component.css']
})
export class AsideMenuLeftComponent implements OnInit {

  menu: MenuContainer = {
    home: 'Dashboard Totoso',
    iconsClass: 'menu-icon fa fa-laptop',
    categories: [
      {
        title: 'UI ELEMENTS BALACO BACO',
        items: [
          {
            title: 'Componentes 1',
            iconsClass: 'menu-icon fa fa-cogs',
            menuItemChildrens: [{
              title: 'HEY I AM ALIVE',
              iconsClass: 'fa fa-puzzle-piece',
              routerLinkUrl: ''
            }]
          },
          {
            title: 'Componentes 2',
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
