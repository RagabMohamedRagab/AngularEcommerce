import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponentComponent } from './shop-component.component';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagantaionComponent } from '../pagantaion/pagantaion.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppRoutingModule } from "../app-routing.module";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgxImageZoomModule } from 'ngx-image-zoom';



@NgModule({
  declarations: [
    ShopComponentComponent,
    ShopItemComponent,
    PagantaionComponent, 
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    PaginationModule,
    AppRoutingModule,
    RouterLink,NgxImageZoomModule
    
     
    
],
  exports:[ShopComponentComponent,PaginationModule]
})
export class ShopModule { }
