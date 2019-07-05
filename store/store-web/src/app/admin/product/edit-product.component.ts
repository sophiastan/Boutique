import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html'
})
export class EditProductComponent {
  product: Product;
  products = [];

  constructor() {
    this.product = new Product();
  }

  // product: string;
  // products = [];

  add() {
    this.products.push({name: this.product.name, category: this.product.category});
    console.log(this.product);
  }
}
