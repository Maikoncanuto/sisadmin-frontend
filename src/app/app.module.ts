import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './reducers';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RolesComponent} from './ui/roles/roles.component';
import {ModalCreateRoleComponent} from './ui/roles/modal-create-role/modal-create-role.component';
import {ModalEditRoleComponent} from './ui/roles/modal-edit-role/modal-edit-role.component';
import {RolesService} from './services/roles.service';
import {JwtInterceptor} from './auth/jwt.interceptor';
import {ErrorInterceptor} from './auth/error.interceptor';
import { ModalDetailRoleComponent } from './ui/roles/modal-detail-role/modal-detail-role.component';


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
    RolesComponent,
    ModalCreateRoleComponent,
    ModalEditRoleComponent,
    ModalDetailRoleComponent,
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
  providers: [
    RolesService,
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalConfirmDeleteUserComponent,
    ModalCreateUserComponent,
    ModalEditUserComponent,
    ModalCreateRoleComponent,
    ModalEditRoleComponent,
    ModalDetailRoleComponent
  ]
})
export class AppModule {
}
