import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public httpClient: HttpClient) { }

  getList() {
    return this.httpClient.get('http://localhost:3000/products');

  }
}
