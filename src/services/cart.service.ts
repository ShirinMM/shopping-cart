import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private selectedData: Array<any> = [];
  constructor(private session: SessionStorageService) { }
  setData(data: any) {
    this.selectedData = data;
    localStorage.setItem('cart_item', JSON.stringify(data));
  }

  getData() {
    let data = JSON.parse(this.session.get('OrderItems'));
    return data ? data : [];
    console.log(data, 'eectedata');

  }
}
