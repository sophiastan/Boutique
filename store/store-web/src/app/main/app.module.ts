import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation.component';
import { HomeComponent } from './home.component';
import { AccountService } from '../services/account.service';
import { ProductsService } from '../services/products.service';

import { CategoryListComponent } from '../store/category-list/category-list.component';
import { StoreComponent } from '../store/store.component';
import { ProductListComponent } from '../store/product-list/product-list.component';
import { ProductItemComponent } from '../store/product-list/product-item.component';
import { EditProductComponent } from '../admin/product/edit-product.component';
import { ListProductComponent } from '../admin/product/list-product.component';
import { SignUpComponent } from '../account/signup.component';
import { SignInComponent } from '../account/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    CategoryListComponent,
    StoreComponent,
    ProductListComponent,
    ProductItemComponent,
    EditProductComponent,
    ListProductComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AccountService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
