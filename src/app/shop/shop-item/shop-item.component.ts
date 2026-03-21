import { Component, Input } from '@angular/core';
import { IProducts } from '../../../Models/IProducts';
import {  } from '@angular/ssr';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrl: './shop-item.component.scss'
})
export class ShopItemComponent {
@Input() product: IProducts;
}
