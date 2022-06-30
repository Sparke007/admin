import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { OrdersComponent } from './Admin/orders/orders.component';

const routes: Routes = [
  {
    component:AddProductComponent,
    path:"addproduct"
  },
  {
    component:OrdersComponent,
    path:"orders"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
