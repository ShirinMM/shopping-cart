import { Component, OnInit } from '@angular/core';
import {CartService} from '@services/cart.service';
import {AppComponent} from '../../../app/app.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartData: any;
  public products: any;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCartproducts();
    this.cartData = this.cartService.getData();
    console.log(this.cartData,"cartt")
  }
  getCartproducts() {
    this.products = JSON.parse(localStorage.getItem("cart_item"));
    // if (!products.some((item) => item.id == singleProduct.id)) {
    //   return true;
    // }
  }
}
