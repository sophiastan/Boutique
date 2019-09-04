import { Component } from '@angular/core';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.model';

@Component({
    selector: "cart-summary",
    templateUrl: "cartSummary.component.html"
})

export class CartSummaryComponent {
    
    constructor(public cart: ShoppingCartComponent) {

    }

}