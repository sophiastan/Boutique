import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  @Input() selectedCategory: string;
  categories: string[];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.productsService.getCategories().subscribe((categories: string[]) => {
      this.categories = [];
      this.categories.push('');
      this.categories = this.categories.concat(categories);
    });
  }


  updateCategory(cat: string) {
    this.selectedCategory = cat;
  }

}
