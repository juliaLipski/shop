import { HostListener } from "@angular/core";
import { Component, OnInit } from '@angular/core';
import { CartService } from './services/Cart.service';
import { LenService } from './services/len.serv';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  host: {
    '(window:scroll)': 'onWindowScroll($event)'
  },
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  len: number;
  innerWidth: number;
  public hidden: boolean = true;
  collapse: boolean = true;
  isCollapsed = true;
  constructor(private CartService: CartService, private lenServ: LenService) {
    
  }

  ngOnInit() {
    this.lenServ.checkedlen.subscribe(len => this.len = len)
    this.CartService.getData().subscribe(items => { this.len = items.length; });
  }
  @HostListener("window:scroll", [])
  public onWindowScroll(event: Event): void {
    window.pageYOffset > 400 ? this.hidden = false : this.hidden = true;
  }
  onMenuClick() {
    this.isCollapsed = true;
  }
  scroll(el) {
    el.scrollIntoView();
  }
}
