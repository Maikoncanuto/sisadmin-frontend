import {JwtInterceptor} from './jwt.interceptor';
import {ErrorInterceptor} from './error.interceptor';
import {AuthGuard} from './auth.guard';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    JwtInterceptor,
    ErrorInterceptor,
    AuthGuard
  ]
})
export class AuthenticationModule {
}
