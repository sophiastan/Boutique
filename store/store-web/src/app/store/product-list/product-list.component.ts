import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/admin/product/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit, OnChanges {
  products: Product[];
  @Input() category: string; 

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.getProducts(this.category);
  }

  ngOnChanges(changes: SimpleChanges) {
    const categoryChange = changes.category;
    if (categoryChange) {
      this.getProducts(this.category);
    }
  }

  getProducts(category: string) {
    if (category) {
      this.productsService.getProductsByCategory(this.category)
        .subscribe((products: Product[]) => this.products = products);
    }
    else {
      this.productsService.getAllProducts()
        .subscribe((products: Product[]) => this.products = products);
    }
  }
}
