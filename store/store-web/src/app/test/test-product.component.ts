import { Product } from '../admin/product/product.model';
import { Component, OnInit} from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
    selector: 'app-test-product',
    templateUrl: './test-product.component.html'
})

export class TestProductComponent {
    product: Product;

    constructor(
        private productService: ProductsService) {
        this.product = new Product();
    }
}
