import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';  //Service
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../shared/interfaces/'

@Component({
    selector: 'page-product-detail',
    templateUrl: './page-product-detail.Component.html'

})


// export class PageProductDetailComponent {

// }

export class PageProductDetailComponent implements OnInit {  //OnInit is interface
    //get a list of products, and show them on UI
    constructor(
        private _http: Http, 
        private _route: ActivatedRoute,
        private _productServices: _productServices) { //Inject http service

    }

    public products: Product;

    ngOnInit() {
        this._route.params.subscribe(param => {
            let productId = param['id'];

            this._productServices.getProduct(productId)
                .subscribe(result => {
                    this.product = result;
                }, error => {
                    console.log (error)
                });

                })
;


        // this._route
        // .params
        // .subscribe( x =>{
        //     console.log(x);
        //     const id = x['id'];
        // })
    }

    getProduct(id) {
        const url = '/assets/products.json'
        this._http
            .get(url)
            .map(x => x.json())
            // .subscribe(result => {
            //     this.products = result.filter(item => item.id).find(i => i.id == id);
            //     console.log(this.products);
            // }, error => {
            //     console.log(error);
            // })
            .subscribe((result: Product[]) => {
                //filter the result to select only product with the id
                this.products = result
                .find(x => x.id ===id);
                console.log(this.products);
                }, error => {
                console.log(error);
            })

    }

    

}