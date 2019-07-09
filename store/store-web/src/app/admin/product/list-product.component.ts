import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html'
})
export class ListProductComponent implements OnInit {
  product: Product;
  products = [];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((products: Product[]) => this.products = products);
  }

}
