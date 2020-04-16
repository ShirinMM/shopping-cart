import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPageComponent } from './first-page/first-page.component';
import {FrontPageRoutingModule} from '@modules/front-page/front-page.routing.module';
import { CheckoutComponent } from '../checkout/checkout.component';



@NgModule({
  declarations: [FirstPageComponent, CheckoutComponent],
  imports: [
    CommonModule,
    FrontPageRoutingModule
  ]
})
export class FrontPageModule { }
