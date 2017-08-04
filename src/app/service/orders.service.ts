import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { OrderInfo } from '../model/order-info';
import { AdminSiteFilter } from '../model/admin-site-filter';

@Injectable()
export class OrdersService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  //private ordersUrl = 'http://tcgiapp1wapp002:801/api/V1/Orders';
  private ordersUrl = 'http://localhost:55246/api/orders';

  constructor(private http: Http) { }

  search(filter: AdminSiteFilter): Observable<OrderInfo[]> {
    this.ordersUrl += "?Success=" + filter.sucess + "&Failed=" + filter.failed + "&Filter=" + filter.filter + "&FilterContetn=" + filter.filterContent + "&Time=" + filter.time;

    return this.http.get(this.ordersUrl)
      .map<Response,OrderInfo[]>(response => response.json().data as OrderInfo[])
      .catch(this.handleError);
  }

  getOrders(): Observable<OrderInfo[]> {
    this.ordersUrl += "?Success=true&Failed=true&Filter=dn&FilterContetn=&Time=4";
    let orderList : OrderInfo[];
    return this.http.get(this.ordersUrl)
      .map<Response,OrderInfo[]>(response => response.json().data as OrderInfo[])
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json().data;
    return body || {};
  }

  private handleError(error: Response | any) {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}