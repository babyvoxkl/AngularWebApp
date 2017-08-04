import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

import { MessageDetail } from "./model/message-detail";
import { MessageDetailReturn } from "./model/message-detail-return";
import { MessageDetailError } from "./model/message-detail-error";
import { MessageService } from "./service/message.service";

@Component({
    selector: 'order-detail',
    templateUrl: './order-detail.component.html',
    styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
    constructor(
        private messageService: MessageService,
        private route: ActivatedRoute,
        private location: Location) { }

    messageDetailList: MessageDetail[];
    errorMsg: string;

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.messageService.getMessageDetail(params['id']))
            .subscribe(messages =>
                this.messageDetailList = messages as MessageDetail[]
            );
    }

    goBack(): void {
        this.location.back();
    }
}