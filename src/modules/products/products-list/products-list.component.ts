import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validators
} from '@angular/forms';
import {ProductsService} from '@services/products.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Router} from '@angular/router';
import {CartService} from '@services/cart.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  public prouctsData: any;
  private product: any;
  public productForm: FormGroup;

  @Output()
  @Output() productRemoved = new EventEmitter();
  @Output() productAdded = new EventEmitter();
  private quantity: any;
  constructor(private productservice: ProductsService,
              private  fb: FormBuilder,
              private  cartService: CartService,
              private router: Router) {
    this.productForm = this.fb.group({
      counter: ['', {validators: [Validators.required, ]}],


    });
  }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
     this.productservice.getList().subscribe((res: any) => {
       this.prouctsData = res;
       console.log(this.prouctsData);

     });
  }
  addCounter(counter) {
console.log(counter,"countt")
  }
  modelChanged(product) {
    this.quantity = product
    if (this.quantity === 0) {
      this.productRemoved.emit(this.product);
    }
  }

  addProductToCart(product) {
    // console.log(product, 'proooo');
    this.productAdded.emit(product);
  }

  submitData(data) {
    this.cartService.setData(data);
    this.router.navigate(['products/cart']);
  }
}
