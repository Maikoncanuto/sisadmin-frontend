import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../auth/authentication.service';

@Component({
  selector: 'sisadmin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get field() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.authenticationService.login(this.field.username.value, this.field.password.value)
      .subscribe(response => {
        const token = response.headers.get('authorization');
        if (token) {
          const tokenSub = token.substring(7);
          localStorage.setItem('currentUser', tokenSub);
          this.router.navigate(['/dashboard']);
        }
      }, error => console.log('Não foi possivel autenticar'));
  }
}
