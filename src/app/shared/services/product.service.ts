import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import { Product } from '../interfaces';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
    constructor(private _http: Http) {

    }
    
    getProducts(): Observable<Product[]> {
        const url = '/assets/products.json'
        return this._http
            .get(url)
            .map(x => x.json())

    }

    getProduct(id){
        const findbyId = (products) => Observable
            .from(products)
            .find((x: Product) => x.id === id);

            return this.getProducts()
                .flatMap(x => findbyId(x))

    }
}



