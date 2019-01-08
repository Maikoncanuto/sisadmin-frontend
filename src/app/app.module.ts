import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './reducers';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './ui/dashboard/dashboard.component';
import {HeaderComponent} from './ui/header/header.component';
import {NavbarHeaderComponent} from './ui/header/navbar-header/navbar-header.component';
import {SearchHeaderComponent} from './ui/header/search-header/search-header.component';
import {DropdownNotificationHeaderComponent} from './ui/header/dropdown-notification-header/dropdown-notification-header.component';
import {DropdownMessageHeaderComponent} from './ui/header/dropdown-message-header/dropdown-message-header.component';
import {DropdownUserHeaderComponent} from './ui/header/dropdown-user-header/dropdown-user-header.component';
import {ROUTES} from './app.routes';
import {AsideMenuComponent} from './ui/aside-menu/aside-menu.component';
import {RouterModule} from '@angular/router';
import {UsersComponent} from './ui/users/users.component';
import {SearchByNamePipe} from './pipes/search-by-name.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalConfirmDeleteUserComponent} from './ui/users/modal-confirm-delete-user/modal-confirm-delete-user.component';
import {ModalCreateUserComponent} from './ui/users/modal-create-user/modal-create-user.component';
import {ModalEditUserComponent} from './ui/users/modal-edit-user/modal-edit-user.component';
import {AuthenticationModule} from './auth/auth.module';
import {LoginComponent} from './ui/login/login.component';
import {HttpClientModule} from '@angular/common/http';


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
    ModalConfirmDeleteUserComponent,
    ModalCreateUserComponent,
    LoginComponent,
    ModalEditUserComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    AuthenticationModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot(reducers, {metaReducers})
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalConfirmDeleteUserComponent,
    ModalCreateUserComponent,
    ModalEditUserComponent
  ]
})
export class AppModule {}
