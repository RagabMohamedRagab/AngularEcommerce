import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponentComponent } from './shop-component.component';
import { ShopItemComponent } from './shop-item/shop-item.component';



@NgModule({
  declarations: [
    ShopComponentComponent,
    ShopItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ShopComponentComponent]
})
export class ShopModule { }
