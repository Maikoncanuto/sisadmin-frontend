import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RoleModel} from '../models/roles/role.model';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private _http: HttpClient) { }

  findAll(): Observable<RoleModel[]> {
    return this._http.get<RoleModel[]>(`${environment.api}/roles`);
  }

  save(role: RoleModel): Observable<RoleModel[]> {
    return this._http.post<RoleModel[]>(`${environment.api}/roles`, role);
  }

  update(role: RoleModel): Observable<RoleModel[]> {
    return this._http.put<RoleModel[]>(`${environment.api}/roles`, role);
  }

}
