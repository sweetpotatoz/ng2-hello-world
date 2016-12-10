import { Component, OnInit } from '@angular/core'
import { Http } from '@angular/http'  //Service
import { Product } from '../shared/interfaces/'
import { Router } from '@angular/router'
import { ProductService } from '../shared/services'

@Component({
    selector: 'page-products',
    templateUrl: './pageproducts.Component.html'

})

export class PageProductsComponent implements OnInit {  //OnInit is interface
    //get a list of products, and show them on UI
    constructor(private _http: Http, private _router: Router, private _ProductSvc: ProductService) { //Inject http service

    }

    public products: Product[];

    ngOnInit() {
        this.getProducts();
    }

    navigateTo(id: string) {
        this._router.navigate(['./', id]);
    }

    // getProducts() {
    //     const url = '/assets/products.json'
    //     this._http
    //         .get(url)
    //         .map(x => x.json())
    //         .subscribe(result => {
    //             this.products = result;
    //             console.log(this.products);
    //         }, error => {
    //             console.log(error);
    //         })
    // }

    getProducts() {
        this._ProductSvc
            .getProducts()
            .subscribe(result => {
                this.products = result;
                console.log(this.products);
            }, error => {
                console.log(error);
            })
    }


}