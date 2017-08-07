import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
    <nav>
      <a routerLink="/orders" routerLinkActive="active">Orders</a>
    </nav>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent { title = 'CS Admin site'; }
