import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { HeaderComponent } from './ui/header/header.component';
import { NavbarHeaderComponent } from './ui/header/navbar-header/navbar-header.component';
import { SearchHeaderComponent } from './ui/header/search-header/search-header.component';
import { DropdownNotificationHeaderComponent } from './ui/header/dropdown-notification-header/dropdown-notification-header.component';
import { DropdownMessageHeaderComponent } from './ui/header/dropdown-message-header/dropdown-message-header.component';
import { DropdownUserHeaderComponent } from './ui/header/dropdown-user-header/dropdown-user-header.component';
import {ROUTES} from './app.routes';
import { AsideMenuComponent } from './ui/aside-menu/aside-menu.component';
import {RouterModule} from '@angular/router';
import { UsersComponent } from './ui/users/users.component';
import { SearchByNamePipe } from './ui/users/pipes/search-by-name.pipe';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    NavbarHeaderComponent,
    SearchHeaderComponent,
    DropdownNotificationHeaderComponent,
    DropdownMessageHeaderComponent,
    DropdownUserHeaderComponent,
    AsideMenuComponent,
    UsersComponent,
    SearchByNamePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
