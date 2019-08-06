import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { Product } from '../admin/product/product.model';
import { ProductsService } from './products.service';

// Angular service for managing shopping cart
@Injectable()
export class ShoppingCartService {
    private products: Product[];

    public constructor(private productsService: ProductsService) {
        this.productsService.getAllProducts().subscribe((products) => this.products = products);
    }

    public addItem(product: Product, quantity: number): void {

    }

    public empty(): void {

    }

    // calculateCart
    // retrieve - get item from list and update cart
}