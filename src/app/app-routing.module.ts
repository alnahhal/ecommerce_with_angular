import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PurchasesListComponent } from './purchases-list/purchases-list.component';

const routes: Routes = [
 {
  path : "",
  component : ProductListComponent

 },
 {
  path : "product-details/:id",
  component : ProductDetailsComponent

 },
  {
  path : "login",
  component : LoginComponent

 },
  {
  path : "register",
  component : RegisterComponent

 },
 {
 path : "purchases-list/:products",
 component : PurchasesListComponent

}
 ,
 {
 path : "**",
 component : NotFoundComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
