import {Component, Input, OnInit} from '@angular/core';
import {MenuContainer, MenuItem} from '../../models/menu-container.model';

@Component({
  selector: 'sisadmin-aside-menu-item',
  templateUrl: './aside-menu-item.component.html',
  styleUrls: ['./aside-menu-item.component.css']
})
export class AsideMenuItemComponent implements OnInit {

  @Input() menuItems: MenuItem[];

  constructor() {
  }

  ngOnInit() {
  }

  hasChildren(item: MenuItem): boolean {
    return item.menuItemChildrens !== undefined && item.menuItemChildrens.length > 0;
  }

  notHasChildren(item: MenuItem): boolean {
    return this.hasChildren(item);
  }

  enableDropDownClass(item: MenuItem) {
    return {
      'menu-item-has-children': this.hasChildren(item),
      'dropdown': this.hasChildren(item),

    };
  }


}
