import { Product } from '../models/Product';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProductService {
    ourProducts: Product[];
    private apiUrl = 'api/shopitems'

    constructor(private http: Http) {}

    getData(): Observable<Product[]> {
        return this.http.get(this.apiUrl)
            .map((res) => {
                // console.log(res.json().data)
                return res.json().data
            })
            .catch(this.hendleError);
    }
    setData(dt: Product): Observable<any> {
        let headers = new Headers({ 'Content--Type': 'aplication/json' });
        let options = new RequestOptions({ headers });
        return this.http.post(this.apiUrl, dt)
            .map(res => {
                return res.json().data
            })
            .catch(this.hendleError)
    };
    private hendleError(error: any) {
        console.log('errrr' + error)
        return Observable.throw(error.message || error)
    }
}