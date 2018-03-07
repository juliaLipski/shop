import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { CartProduct } from '../../models/CartProduct';
import { CartService } from '../../services/Cart.service';
import { LenService } from '../../services/len.serv';
@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  displayedColumns = ['img', 'product', 'price', 'quantity', 'del'];
  cartProducts: CartProduct[];
  totalPrice: number;
  dataSource = new MatTableDataSource(this.cartProducts);

  constructor(private CartService: CartService, private lenServ: LenService) {
  }
  getTotal() {
    let total = 0;
    for (let it of this.cartProducts) {
      total += it.price* it.quan;
  }
    return total;
}
  ngOnInit() {
    this.CartService.getData().subscribe((items) => {
      this.cartProducts = items;
      this.dataSource = new MatTableDataSource(this.cartProducts);
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  removeItem(element) {
    this.CartService.removeItem(element.id).subscribe((mes) => {
      this.CartService.getData().subscribe((items) => {
        this.cartProducts = items;
        this.lenServ.edditLen(items.length)
        this.dataSource = new MatTableDataSource(this.cartProducts);
      });
    })
  }
}