import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShopComponentComponent } from './shop/shop-component.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Shop',component:ShopComponentComponent  },
  {path:'ProductDetails/:id',component:ProductDetailsComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
