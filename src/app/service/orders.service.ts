import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { OrderInfo } from '../model/order-info';
import { AdminSiteFilter } from '../model/admin-site-filter';

@Injectable()
export class OrdersService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private ordersUrl = 'http://tcgiapp1wapp001:801/api/V1/Orders';
  //private ordersUrl = 'http://localhost:53705/api/V1/Orders';
  //private ordersUrl = 'http://localhost:55246/api/orders';

  constructor(private http: Http) { }

  search(filter: AdminSiteFilter): Observable<OrderInfo[]> {
    // let thisUrl: string;
    // thisUrl = `${this.ordersUrl}?Success=${filter.sucess}&Failed=${filter.failed}&Filter=${filter.filter}&FilterContetn=${filter.filterContent}&Time=${filter.time}`;
    let headers = new Headers({ 'Content-Type': 'application/json' }); //其实不表明 json 也可以, ng 默认好像是 json
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.ordersUrl, filter, options)
      .map<Response, OrderInfo[]>(response => response.json() as OrderInfo[])
      .catch(this.handleError);
  }

  getOrders(): Observable<OrderInfo[]> {
    // let thisUrl: string;
    // thisUrl = `${this.ordersUrl}?Success=true&Failed=true&Filter=DN&FilterContetn=&Time=4`;
    let filter: AdminSiteFilter;
    filter = new AdminSiteFilter();
    filter.Failed = true;
    filter.Success = false;
    filter.Filter = "dn";
    filter.FilterContent = '';
    filter.Time = "0"

    return this.search(filter);
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