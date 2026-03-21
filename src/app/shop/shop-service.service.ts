import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { IPagination } from '../../Models/IPagination';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopServiceService  {
  baseUrl='https://localhost:7025/api/';
  constructor(private http:HttpClient) { }

  getProduct(CategoryId?:number,sort?:string){
    var param=new HttpParams();
    if(CategoryId){
      param=param.append('categoryId',CategoryId);
            param=param.append('sort',sort);

    }
    return this.http.get<IPagination>(this.baseUrl+'Product/get-all-product', { params: param });
  }
  getCategory(){
      return this.http.get(this.baseUrl+'Category/get-all');
  }
  
}
