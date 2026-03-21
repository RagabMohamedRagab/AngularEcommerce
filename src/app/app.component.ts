import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProducts } from '../Models/IProducts';
import { IPagination } from '../Models/IPagination';
import { ShopComponentComponent } from './shop/shop-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  Products:IProducts[];
  baseUrl='https://localhost:7025/api/Product/get-all-product';
  constructor(private http: HttpClient) {}
  GetProducts(){
   this.http.get(this.baseUrl).subscribe({
    next: (res:IPagination) => {
      console.log(res);
      this.Products = res.entities;
    }
   })
  }
  ngOnInit(): void {
    this.GetProducts();
  }
}
