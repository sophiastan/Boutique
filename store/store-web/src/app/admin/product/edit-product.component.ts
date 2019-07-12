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
export class EditProductComponent {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService) 
  {
    this.product = new Product();
    this.route.params.subscribe(p => this.product.id = +p['id']);
  }

  ngOnInit(): void {
    const requests: Observable<any>[] = [
      
    ];

    // If product ID is specified, it's for editing; otherwise for new vehicle
    if (this.product.id) {
      requests.push(this.productService.getProdcut(this.product.id));
    }
    forkJoin(requests).subscribe(data => {
      if (this.product.id) {
        
      }
    }, err => {
        if (err.status === 404) {
          this.router.navigate(['']);
        }
    });
  }

  submit() {
    let result: Observable<Product>;
    if (this.product.id) {
      // Update
      result = this.productService.updateProduct(this.product);
    }
    else {
      // Add
      result = this.productService.addProduct(this.product);
    }
    result.subscribe((product: Product) => {
      this.router.navigate(['products']);
    });
  }

  delete() {
    if (confirm('Delete this product?')) {
      this.productService.deleteProduct(this.product.id)
        .subscribe(r => {
          this.router.navigate(['products']);
        });
    }
  }

  private populateProduct(product: Product) {
    this.product.id = product.id;
    this.product.name = product.name;
    this.product.category = product.category;
    this.product.quantity = product.quantity;
    this.product.price = product.price; 
    // forEach?
  }
}
