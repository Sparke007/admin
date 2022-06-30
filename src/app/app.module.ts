import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { OrdersComponent } from './Admin/orders/orders.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OrdersComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
