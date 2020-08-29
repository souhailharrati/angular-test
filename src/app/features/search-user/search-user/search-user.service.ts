import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';
import {User} from './../../../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class SearchUserService {

  constructor(private httpClient: HttpClient) { }

  getUser(userName) {
    return this.httpClient.get<User>(`${environment.url}${userName}`);
  }
}
