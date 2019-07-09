import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html'
})
export class ListProductComponent {
  // products: Product[] = {
  //   new Product('Apples', 'Produce');
  // };

  product: Product;
  products = [];

  // constructor() {
  //   this.product = new Product();
  // }

  add(product: Product) {
    this.products.push(product);
  }
}
