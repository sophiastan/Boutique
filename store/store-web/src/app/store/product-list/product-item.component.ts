import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/admin/product/product.model';
import { ShoppingCartComponent } from 'src/app/shopping-cart/shopping-cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html'
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  constructor(private router: Router, private cart: ShoppingCartComponent) { }

  ngOnInit() {
  }

  addProductToCart(product: Product) {
    this.cart.addItem(product);
    this.router.navigate(['cart']);
  }

}
