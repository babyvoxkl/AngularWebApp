"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var orders_service_1 = require("./service/orders.service");
var OrdersComponent = (function () {
    function OrdersComponent(ordersService, router) {
        this.ordersService = ordersService;
        this.router = router;
        this.orderList = [];
    }
    OrdersComponent.prototype.getOrderList = function () {
        var _this = this;
        this.ordersService
            .getOrders()
            .subscribe(function (orders) {
            console.log("Success Response: " + orders);
            _this.orderList = orders;
        });
        console.info("Totle orders count: " + this.orderList.length);
    };
    OrdersComponent.prototype.ngOnInit = function () {
        this.getOrderList();
    };
    OrdersComponent = __decorate([
        core_1.Component({
            selector: 'my-orders',
            templateUrl: './orders.component.html',
            styleUrls: ['./orders.component.css']
        }),
        __metadata("design:paramtypes", [orders_service_1.OrdersService,
            router_1.Router])
    ], OrdersComponent);
    return OrdersComponent;
}());
exports.OrdersComponent = OrdersComponent;
//# sourceMappingURL=orders.component.js.map