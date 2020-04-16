import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from '@modules/front-page/first-page/first-page.component';
import { CartComponent } from '@modules/products/cart/cart.component';

import {FrontPageModule} from '@modules/front-page/front-page.module';
import {ProductsModule} from '@modules/products/products.module';

const routes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'welcome', component: FirstPageComponent, pathMatch: 'full'},
  { path: 'products/cart', component: CartComponent, pathMatch: 'full'},

  {path: 'products', loadChildren: () => import('@modules/products/products.module').then(m => m.ProductsModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ProductsModule,
  FrontPageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
