import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FrontPageModule} from '@modules/front-page/front-page.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {ProductsModule} from '@modules/products/products.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import {FrontPageRoutingModule} from '@modules/front-page/front-page.routing.module';
import {ProductsRoutingModule} from '@modules/products/products.routing.module';
import { CheckoutModalComponent } from './checkout-modal/checkout-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    CheckoutModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FrontPageRoutingModule,
    ProductsRoutingModule,
    FrontPageModule,
    ProductsModule,
    NoopAnimationsModule,
    MatDialogModule,
    HttpClientModule
  ],
  entryComponents: [CheckoutModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {MatDialogModule}
