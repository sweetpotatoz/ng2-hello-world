//import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageProductsComponent } from './pageproducts';
import { PageProductDetailComponent } from './page-product-detail';

export const appRoutes: Routes = [
    {
        path: 'products',
        component: PageProductsComponent
    },

    {
        path: 'products/:id',
        component: PageProductDetailComponent
    },
    
    {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
    }
];

