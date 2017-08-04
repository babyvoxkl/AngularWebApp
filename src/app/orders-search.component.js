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
var Observable_1 = require("rxjs/Observable");
// Observable class extensions
require("rxjs/add/observable/of");
// Observable operators
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/switchMap");
var orders_service_1 = require("./service/orders.service");
var OrdersSearchComponent = (function () {
    function OrdersSearchComponent(ordersService, router) {
        this.ordersService = ordersService;
        this.router = router;
        this.filter = new Observable_1.Observable();
    }
    OrdersSearchComponent.prototype.search = function (filter) {
    };
    OrdersSearchComponent.prototype.ngOnInit = function () {
    };
    OrdersSearchComponent = __decorate([
        core_1.Component({
            selector: 'orders-search',
            templateUrl: './orders-search.component.html',
            styleUrls: ['./orders-search.component.css'],
            providers: [orders_service_1.OrdersService]
        }),
        __metadata("design:paramtypes", [orders_service_1.OrdersService, router_1.Router])
    ], OrdersSearchComponent);
    return OrdersSearchComponent;
}());
exports.OrdersSearchComponent = OrdersSearchComponent;
//# sourceMappingURL=orders-search.component.js.map