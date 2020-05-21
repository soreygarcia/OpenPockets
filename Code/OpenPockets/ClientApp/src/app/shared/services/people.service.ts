import { Injectable, Inject } from '@angular/core';
import { PersonModel } from '../../shared/models/person.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PeopleService {

  _baseUrl: string;
  _httpClient: HttpClient

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
    this._httpClient = http;
  }
  
  getPeople(): Observable<PersonModel[]> {
    return this._httpClient.get<PersonModel[]>(this._baseUrl + 'api/People')
  }
}
