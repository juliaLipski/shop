import { CartProduct } from '../models/CartProduct';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
@Injectable()
export class CartService {
    cartProducts: CartProduct[];
    private apiUrl = 'api/cart'
    constructor(private http: Http) {
        this.cartProducts = [];
    }

    getData(): Observable<CartProduct[]> {
        return this.http.get(this.apiUrl)
            .map((res) => {
                return res.json().data
            })
            .catch(this.hendleError);
    }
    getItem(id): Observable<CartProduct> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.delete(this.apiUrl + "/" + id)
            .map(success => success.status)
            .catch(this.hendleError)

    }
    setData(data): Observable<any> {
        var dt = JSON.stringify(data);
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.post(this.apiUrl, dt, options)
            .map(success => success.status)
            .catch(this.hendleError)
    }

    removeItem(id): Observable<any> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.delete(this.apiUrl + "/" + id)
            .map(success => success.status)
            .catch(this.hendleError)

    };
    private hendleError(error: any) {
        console.log('errrr' + error)
        return Observable.throw(error.message || error)
    }
}