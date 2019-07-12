import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Product } from '../product/product.model';
import { Observable, forkJoin } from 'rxjs';
import { ProductsService } from '../../services/products.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService) 
  {
    this.product = new Product();
    this.route.params.subscribe(p => {
      const id = +p.id;
      if (id) {
        this.product.id = id;
      }
    });
  }

  ngOnInit(): void {
    if (this.product.id) {
      this.productsService.getProduct(this.product.id).subscribe(prod => this.product = prod);
    }
  }

  submit() {
    let result: Observable<Product>;
    if (this.product.id) {
      // Update
      result = this.productsService.updateProduct(this.product);
    }
    else {
      // Add
      result = this.productsService.addProduct(this.product);
    }
    result.subscribe((product: Product) => {
      this.router.navigate(['products']);
    });
  }

  delete() {
    if (confirm('Delete this product?')) {
      this.productsService.deleteProduct(this.product.id)
        .subscribe(r => {
          this.router.navigate(['products']);
        });
    }
  }
}
