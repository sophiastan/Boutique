import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html'
})

export class ShoppingCartComponent implements OnInit {

    public constructor(private productsService: ProductsService) {

    }

    public emptyCart(): void {
        
    }

    public ngOnInit() {

    }

}
