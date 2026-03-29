import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponentComponent } from './shop-component.component';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagantaionComponent } from '../pagantaion/pagantaion.component';



@NgModule({
  declarations: [
    ShopComponentComponent,
    ShopItemComponent,PagantaionComponent
  ],
  imports: [
    CommonModule,
    PaginationModule
  ],
  exports:[ShopComponentComponent,PaginationModule]
})
export class ShopModule { }
