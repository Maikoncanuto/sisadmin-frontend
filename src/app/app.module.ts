import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { AsideMenuLeftComponent } from './ui/aside-menu-left/aside-menu-left.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AsideMenuContainerComponent } from './ui/aside-menu-container/aside-menu-container.component';
import { AsideMenuItemComponent } from './ui/aside-menu-item/aside-menu-item.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AsideMenuLeftComponent,
    AsideMenuContainerComponent,
    AsideMenuItemComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule,
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
