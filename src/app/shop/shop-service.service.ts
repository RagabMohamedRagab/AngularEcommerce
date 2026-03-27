import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { IPagination } from '../../Models/IPagination';
import { Observable } from 'rxjs';
import { ProductParameter } from '../../Models/product-parameter';

@Injectable({
  providedIn: 'root'
})
export class ShopServiceService  {
  baseUrl='https://localhost:7025/api/';
  constructor(private http:HttpClient) { }

  getProduct(Product:ProductParameter){
    console.log(Product);
    var param=new HttpParams();
    if(Product.CategoryId){
      param=param.append('categoryId',Product.CategoryId);
    }
    debugger
    if(Product.sort){
      param=param.append('sort',Product.sort);
    }
    debugger;
    if(Product.search){
      param=param.append('Search',Product.search);
    }
     if(Product.PageNumber){
      param=param.append('PageNumber',Product.PageNumber);
    }
     if(Product.search){
      param=param.append('pageSize',Product.PageSize);
    }
    return this.http.get<IPagination>(this.baseUrl+'Product/get-all-product', { params: param });
  }
  getCategory(){
      return this.http.get(this.baseUrl+'Category/get-all');
  }
  
}
