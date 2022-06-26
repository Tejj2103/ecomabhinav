import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { WishComponent } from './component/wishlist/wish.component';
import {ProductsComponent} from './component/products/products.component';
import {ManageProductsComponent} from './component/manage/products/products.component';
import {LoginComponent} from './component/login/login.component'
import { SignupComponent } from './component/signup/signup.component';
import { UsersComponent } from './component/manage/users/users.component';
import { AdminComponent } from './component/admin/admin.component';
import { EditComponent } from './component/manage/editProduct/edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/manage/users', component: UsersComponent },
  { path: 'admin/manage/products', component: ManageProductsComponent },
  // {path:'', redirectTo: 'products',pathMatch: 'full'},
  {path:'products', component: ProductsComponent},
  {path:'cart' , component: CartComponent},
  {path:'wishlist' , component: WishComponent},
  {path:'editproduct/:id' , component: EditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
