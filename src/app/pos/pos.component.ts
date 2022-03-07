import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogComponent } from './dialog/dialog.component';
import * as moment from 'moment';
@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss']
})
export class PosComponent implements OnInit {
  public date: any = moment().format('DD-MM-YYYY hh:mm a');
  public productsListing: any[] = [
    {
      id: 1,
      name: 'Product dbfjhds sdfbkj',
      price: 300,
      image: '../../assets/images/p1.jpg',
      sku: '',
      quantity: 1,
      total: 0,
    },
    {
      id: 2,
      name: 'Product 1',
      price: 400,
      image: '../../assets/images/p1.jpg',
      sku: '',
      quantity: 1,
      total: 0,
    },
    {
      id: 3,
      name: 'Product 1',
      price: 500,
      image: '../../assets/images/p1.jpg',
      sku: '',
      quantity: 1,
      total: 0,
    },
    {
      id: 4,
      name: 'Product 1',
      price: 600,
      image: '../../assets/images/p1.jpg',
      sku: '',
      quantity: 1,
      total: 0,
    },
    {
      id: 5,
      name: 'Product 1',
      price: 700,
      image: '../../assets/images/p1.jpg',
      sku: '',
      quantity: 1,
      total: 0,
    }, {
      id: 5,
      name: 'Product 1',
      price: 700,
      image: '../../assets/images/p1.jpg',
      sku: '',
      quantity: 1,
      total: 0,
    }, {
      id: 5,
      name: 'Product 1',
      price: 700,
      image: '../../assets/images/p1.jpg',
      sku: '',
      quantity: 1,
      total: 0,
    }, {
      id: 5,
      name: 'Product 1',
      price: 700,
      image: '../../assets/images/p1.jpg',
      sku: '',
      quantity: 1,
      total: 0,
    }, {
      id: 5,
      name: 'Product 1',
      price: 700,
      image: '../../assets/images/p1.jpg',
      sku: '',
      quantity: 1,
      total: 0,
    }, {
      id: 5,
      name: 'Product 1',
      price: 700,
      image: '../../assets/images/p1.jpg',
      sku: '',
      quantity: 1,
      total: 0,
    }, {
      id: 5,
      name: 'Product 1',
      price: 700,
      image: '../../assets/images/p1.jpg',
      sku: '',
      quantity: 1,
      total: 0,
    }, {
      id: 5,
      name: 'Product 1',
      price: 700,
      image: '../../assets/images/p1.jpg',
      sku: '',
      quantity: 1,
      total: 0,
    }, {
      id: 5,
      name: 'Product 1',
      price: 700,
      image: '../../assets/images/p1.jpg',
      sku: '',
      quantity: 1,
      total: 0,
    }, {
      id: 5,
      name: 'Product 1',
      price: 700,
      image: '../../assets/images/p1.jpg',
      sku: '',
      quantity: 1,
      total: 0,
    }, {
      id: 5,
      name: 'Product 1',
      price: 700,
      image: '../../assets/images/p1.jpg',
      sku: '',
      quantity: 1,
      total: 0,
    },
  ];
  public billListing: any[] = [];
  public grandTotal: any = 0;
  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    setInterval(() => {
      this.date = moment().format('DD-MM-YYYY hh:mm a')
    }, 1000)

  }

  getProduct(i: any) {
    this.billListing.indexOf(i) === -1 ? this.billListing.push(i) : this._snackBar.open('Product already exists', 'Ok');

    this.getSum()
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }
  removeItem(i: any) {
    this.billListing.splice(i, 1)
    this.productsListing[i].quantity = 1;
    if (this.billListing.length == 0) {
      this.grandTotal = 0;
    }
    this.getSum()
  }
  addQuantity(item: any) {
    item.quantity = +item.quantity + 1;
    this.getSum()
  }
  subtractQuantity(item: any) {
    item.quantity = +item.quantity - 1;
    this.getSum()
  }
  getSum() {
    if (this.billListing.length > 0) {
      let sum: number = this.billListing.map(a => a.price * a.quantity).reduce(function (a, b) {
        return a + b;
      });
      this.grandTotal = sum.toFixed(1);
    }

  }
}
