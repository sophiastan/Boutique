import { Component, Injectable } from '@angular/core';
import { Product } from '../admin/product/product.model';

@Injectable()
export class ShoppingCartComponent {
    public items: CartItem[] = [];
    public itemCount: number = 0;
    public cartPrice: number = 0;

    addItem(product: Product, quantity: number = 1) {
        let item = this.items.find(item => item.product.id == product.id);
        if (item != undefined) {
            item.quantity += quantity;
        }
        else {
            this.items.push(new CartItem(product, quantity));
        }
        this.recalculate();
    }

    updateCart(product: Product, quantity: number) {
        let item = this.items.find(item => item.product.id == product.id);
        if (item != undefined) {
            item.quantity = Number(quantity);
        }
        this.recalculate();
    }

    removeItem(id: number) {
        let index = this.items.findIndex(item => item.product.id == id);
        this.items.splice(index, 1);
        this.recalculate();
    }

    clearCart() {
        this.items = [];
        this.itemCount = 0;
        this.cartPrice = 0;
    }

    private recalculate() {
        this.itemCount = 0;
        this.cartPrice = 0;
        this.items.forEach(r => {
            this.itemCount += r.quantity;
            this.cartPrice += (r.quantity * r.product.price);
        })
    }
}

export class CartItem {
    constructor(public product: Product, public quantity: number) {

    }

    get itemTotal() {
        return this.quantity * this.product.price;
    }
}
