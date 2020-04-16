import { Component } from '@angular/core';
import {FirstPageComponent} from '@modules/front-page/first-page/first-page.component';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CheckoutModalComponent } from '../app/checkout-modal/checkout-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping-cart';
  constructor(private dialog: MatDialog) { }
  openModal() {
    const dialogRef = this.dialog.open(CheckoutModalComponent, );
  }
}
