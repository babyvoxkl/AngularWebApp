import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { OrderInfo } from './model/order-info';
import { AdminSiteFilter } from './model/admin-site-filter';
import { OrdersService } from './service/orders.service';


@Component({
    selector: 'my-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {
    orderList: OrderInfo[];
    selectedOrder: OrderInfo;
    errorMsg: string;

    public filterValue: string;
    public filterContent: string;
    public time: string;
    public success: boolean;
    public failed: boolean;
    private filter = new Subject<AdminSiteFilter>();

    constructor(
        private ordersService: OrdersService,
        private router: Router) { }

    getOrderList(): void {
        this.ordersService.getOrders()
            .subscribe(orders => {
                this.orderList = orders as OrderInfo[]
            });
    }
    search(): void {
        let adminFilter: AdminSiteFilter;
        adminFilter.filter = this.filterValue;
        adminFilter.filterContent = this.filterContent;
        adminFilter.sucess = this.success;
        adminFilter.failed = this.failed;
        adminFilter.time = this.time;

        this.filter.next(adminFilter);
    }
    ngOnInit(): void {
        this.filter
            .distinctUntilChanged()
            .switchMap(term => term ? this.ordersService.search(term) : this.ordersService.getOrders())
            .catch(error => {
                console.log(error);
                return Observable.of<OrderInfo[]>([]);
            })
            .subscribe(orders => {
                this.orderList = orders as OrderInfo[]
            });
    }
}