import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { OrdersComponent } from './orders.component';
import { OrderDetailComponent } from './order-detail.component';

import { OrdersService } from './service/orders.service';
import { MessageService } from './service/message.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderDetailComponent],
  providers: [
    OrdersService,
    MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
