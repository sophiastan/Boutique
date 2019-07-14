import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories = [];
  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.productsService.getCategories().subscribe((categories) => this.categories = categories);
  }
}

/* import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/admin/product/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  product: Product;
  products = [];

  // cat = this.product.category;
  // categories = [];

  public selectedCategory = null;
  public productsPerPage = 4;
  public selectedPage = 1;

  constructor(private productsService: ProductsService) {
    this.product = new Product;
   }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((products: Product[]) => this.products = products);
    // this.productsService.getCategories().subscribe((categories) => this.selectedCategory = this.selectedCategory);
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }
}
 */
