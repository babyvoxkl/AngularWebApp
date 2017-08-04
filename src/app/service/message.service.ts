import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { MessageDetail } from "../model/message-detail";
import { MessageDetailReturn } from "../model/message-detail-return";
import { MessageDetailError } from "../model/message-detail-error";

@Injectable()
export class MessageService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private messageUrl = 'http://tcgiapp1wapp001:801/api/V1/Messages';

    constructor(private http: Http) { }

    getMessageDetail(id: string): Observable<MessageDetail[]> {
        return this.http.get(this.messageUrl + `?id=${id}`)
            .map<Response, MessageDetail[]>(response => response.json() as MessageDetail[])
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        console.error('An error occurred', error); 
        return Promise.reject(error.message || error);
    }
}