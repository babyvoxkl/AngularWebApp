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
    public defTime: string;

    private adminFilter: AdminSiteFilter;

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
        this.adminFilter.Filter = this.filterValue;
        this.adminFilter.FilterContent = this.filterContent;
        this.adminFilter.Success = this.success;
        this.adminFilter.Failed = this.failed;
        this.adminFilter.Time = this.time;

        this.ordersService.search(this.adminFilter)
            .subscribe(orders => {
                this.orderList = orders as OrderInfo[]
            });
    }
    setTime() {
        this.time = this.defTime;
    }
    setSucceed(checked: boolean) {
        this.success = checked;
    }
    setFailed(checked: boolean) {
        this.failed = checked;
    }
    ngOnInit(): void {
        this.defTime = "0";
        this.failed = true;
        this.success = false;
        this.filterValue = "dn";
        this.filterContent = "";

        this.adminFilter = new AdminSiteFilter();
        this.adminFilter.Filter = this.filterValue;
        this.adminFilter.FilterContent = this.filterContent;
        this.adminFilter.Success = this.success;
        this.adminFilter.Failed = this.failed;
        this.adminFilter.Time = this.time;
        this.ordersService.getOrders()
            .subscribe(orders => {
                this.orderList = orders as OrderInfo[]
            });
    }
}