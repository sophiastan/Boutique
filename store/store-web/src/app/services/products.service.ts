import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../admin/product/product.model';

// Angular service for managing products
@Injectable()
export class ProductsService {
    baseUrl = 'http://localhost:5000';
    productsUrl = this.baseUrl + '/api/products';
    productsByCategoryUrl = this.baseUrl + '/api/products/category';

    constructor(private http: HttpClient) {
    }

    // Gets all products
    getAllProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.productsUrl);
    }

    // Gets products for a category.
    getProductsByCategory(category: string): Observable<Product[]> {
        const url = `${this.productsByCategoryUrl}/${category}`;
        return this.http.get<Product[]>(url);
    }

    // Gets a product.
    // Returns the product or NotFound if the product is not found.
    getProdcut(id: number): Observable<Product> {
        const url = `${this.productsUrl}/${id}`;
        return this.http.get<Product>(url);
    }

    // Adds a product.
    // Returns the product created in the database.
    addProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(this.productsUrl, product);
    }

    // Updates a product.
    // Returns the updated product or NotFound if the product is not found.
    // updateProduct(product: Product): Observable<Product> {
    //     const url = `${this.productsUrl}/${product.id}`;
    //     return this.http.put<Product>(url, product);
    // }

    // Deletes a product.
    // Returns the deleted product or NotFound if the product is not found.
    deleteProduct(id: number): Observable<Product> {
        const url = `${this.productsUrl}/${id}`;
        return this.http.delete<Product>(url);
    }
}
