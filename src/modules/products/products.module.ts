import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import {ProductsRoutingModule} from '@modules/products/products.routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CartComponent } from '@modules/products/cart/cart.component';



@NgModule({
  declarations: [ProductsListComponent, CartComponent],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        MatCheckboxModule,
        MatSelectModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule

    ]
})
export class ProductsModule { }
