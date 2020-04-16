import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsListComponent} from './products-list/products-list.component';
import {FirstPageComponent} from '@modules/front-page/first-page/first-page.component';
import {CartComponent} from '@modules/products/cart/cart.component';


const routes: Routes = [{  path: '', component: ProductsListComponent,
  children: [
    { path: 'list', component: ProductsListComponent},
    { path: 'cart', component: CartComponent},
]
}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
