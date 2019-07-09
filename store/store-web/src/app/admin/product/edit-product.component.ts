import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html'
})
export class EditProductComponent {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('catInput', {static: false}) catInputRef: ElementRef;
  @Output() productAdded = new EventEmitter<Product>();

  add() {
    const prodName = this.nameInputRef.nativeElement.value;
    const prodCat = this.catInputRef.nativeElement.value;
    const newProduct = new Product(prodName, prodCat);
    this.productAdded.emit(newProduct);
  }

  // product: Product;
  // products = [];

  // constructor() {
  //   this.product = new Product();
  // }

  // add() {
  //   this.products.push({name: this.product.name, category: this.product.category});
  //   console.log(this.product);
  // }

  // delete(name) {
  //   for (var i=0; i < this.products.length; i++) {
  //     if (this.products[i]["name"] == name) {
  //       this.products.splice(i, 1);
  //     }
  //   }
  // }
}
