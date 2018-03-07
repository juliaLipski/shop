import { CartService } from '../services/Cart.service';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class LenService {
    private len = new BehaviorSubject<number>(0);
    checkedlen = this.len.asObservable()
    private apiUrl = 'api/cart'
    constructor() {
    }

    edditLen(l) {
        this.len.next(l)
    }
}