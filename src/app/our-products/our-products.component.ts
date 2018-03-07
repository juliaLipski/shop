import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Product } from './../models/Product';
import { CartProduct } from './../models/CartProduct';
import { ProductService } from '../services/Products.service';
import { CartService } from '../services/Cart.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LenService } from '../services/len.serv';

@Component({
    selector: 'app-our-products',
    templateUrl: './our-products.component.html',
    styleUrls: ['./our-products.component.css']
})

export class OurProductsComponent implements OnInit {
    ourProducts: Product[];
    showDialog: boolean = false;
    showDialogMess: boolean =false;
    item: CartProduct = new CartProduct();
    mess:string;
    innerWidth: number;
    p: number = 1;
    numP: number = 3;
    id: any;
    selected: any;
    num: number;
    title: string;
    price: number;
    img: string;
    numbers: number[];
    constructor(private ProductService: ProductService, private CartService: CartService, public dialog: MatDialog, private lenServ: LenService) {
        this.ProductService.getData().subscribe(ourProducts => {
            this.ourProducts = ourProducts;
            // console.log(this.ourProducts)
        });
        this.numbers = [1, 2, 3, 4, 5];
    }
    addItem() {
        this.item = {
            id: this.id,
            title: this.title,
            img: this.img,
            price: this.price,
            quan: this.selected
        }
        console.log(this.item)
        this.CartService.setData(this.item).subscribe((mes) => {
            console.log(mes)
            if(mes==200){
                this.showDialogMess = true;
                    this.mess = "success";
                this.CartService.getData().subscribe((items) => {
                    this.lenServ.edditLen(items.length); 
                });
            }else{
                this.showDialogMess = true;
                this.mess = "error";
            }
        });;
        this.showDialog = false;
    }
    getWindow = function(){
        return window.innerWidth;
      };
    onResize(){
        this.innerWidth = this.getWindow();
        if(this.innerWidth > 900){
          this.numP = 3;
        }else if(this.innerWidth > 600 && this.innerWidth < 899){
          this.numP = 2;
        }else if(this.innerWidth > 10 && this.innerWidth < 599){
            this.numP = 1;
          }
      }
    getItem(item) {
        this.showDialog = true;
        this.id = item.id;
        this.title = item.title;
        this.price = item.price;
        this.img = item.img;
    }

    ngOnInit() {
        this.onResize();
    }
}

