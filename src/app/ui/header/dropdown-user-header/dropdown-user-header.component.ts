import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../auth/authentication.service';

@Component({
  selector: 'sisadmin-dropdown-user-header',
  templateUrl: './dropdown-user-header.component.html',
  styleUrls: ['./dropdown-user-header.component.css']
})
export class DropdownUserHeaderComponent implements OnInit {

  constructor(private router: Router,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  logout(): void {
    this.authenticationService.logout();
  }
}
