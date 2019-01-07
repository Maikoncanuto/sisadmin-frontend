import {Component, Input, OnInit} from '@angular/core';
import {MenuContainer} from '../../models/menu-container.model';

@Component({
  selector: 'sisadmin-aside-menu-container',
  templateUrl: './aside-menu-container.component.html',
  styleUrls: ['./aside-menu-container.component.css']
})
export class AsideMenuContainerComponent implements OnInit {

  @Input() menuContainer: MenuContainer;

  constructor() {
  }

  ngOnInit() {
  }

}
