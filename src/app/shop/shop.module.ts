import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponentComponent } from './shop-component.component';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';



@NgModule({
  declarations: [
    ShopComponentComponent,
    ShopItemComponent
  ],
  imports: [
    CommonModule,
    PaginationModule
  ],
  exports:[ShopComponentComponent]
})
export class ShopModule { }
