import { Component, OnInit } from '@angular/core';

import { Product } from '../../admin/product/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // products: Product[] = [
  //   new Product('Product #1', 'This is simply a test #1', 'https://images.media-allProducts.com/images/56589.png'),
  //   new Product('Product #2', 'This is simply a test #2', 'https://images.media-allProducts.com/images/56589.png')
  // ];

  // product: Product;
  // products = [];

  // constructor() {
  //   this.product = new Product();
  // }

  ngOnInit() {
  }

}
