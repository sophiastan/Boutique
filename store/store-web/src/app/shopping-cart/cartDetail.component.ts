import { Component } from '@angular/core';
import { ShoppingCartComponent } from './shopping-cart.model';

@Component ({
    templateUrl: './cartDetail.component.html'
})

export class CartDetailComponent {
    constructor(public cart: ShoppingCartComponent) {

    }
}