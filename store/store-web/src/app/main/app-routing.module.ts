import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { StoreComponent } from '../store/store.component';
import { EditProductComponent } from '../admin/product/edit-product.component';
import { ListProductComponent } from '../admin/product/list-product.component';
import { SignUpComponent } from '../account/signup.component';
import { SignInComponent } from '../account/signin.component';
import { ListUserComponent } from '../account/list-user.component';

import { TestProductComponent } from '../test/test-product.component';
import { TestAccountComponent } from '../test/test-account.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'store', component: StoreComponent},
  { path: 'products/new', component: EditProductComponent},
  { path: 'products/:id', component: EditProductComponent},
  { path: 'products', component: ListProductComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'signin', component: SignInComponent},
  { path: 'users', component: ListUserComponent},
  
  { path: 'test/products', component: TestProductComponent },
  { path: 'test/account', component: TestAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
