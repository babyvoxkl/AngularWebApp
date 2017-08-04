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
var http_1 = require("@angular/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var OrdersService = (function () {
    function OrdersService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        //private ordersUrl = 'http://tcgiapp1wapp002:801/api/V1/Orders';
        this.ordersUrl = 'http://localhost:55246/api/orders';
    }
    OrdersService.prototype.search = function (filter) {
        this.ordersUrl += "?Success=" + filter.Sucess + "&Failed=" + filter.Failed + "&Filter=" + filter.Filter + "&FilterContetn=" + filter.FilterContent + "&Time=" + filter.Time;
        return this.http.get(this.ordersUrl)
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    OrdersService.prototype.getOrders = function () {
        this.ordersUrl += "?Success=true&Failed=true&Filter=dn&FilterContetn=&Time=4";
        return this.http.get(this.ordersUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    OrdersService.prototype.extractData = function (res) {
        var body = res.json().data;
        return body || {};
    };
    OrdersService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    OrdersService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], OrdersService);
    return OrdersService;
}());
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map