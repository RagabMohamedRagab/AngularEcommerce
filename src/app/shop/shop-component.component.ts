import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ShopServiceService } from '../../Services/shop-service.service';
import { Category, IProducts } from '../../Models/IProducts';
import { IPagination, IPaginationCategory } from '../../Models/IPagination';
import { ProductParameter } from '../../Models/product-parameter';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shop-component',
  templateUrl: './shop-component.component.html',
  styleUrl: './shop-component.component.scss'
})
export class ShopComponentComponent implements OnInit {

  Products:IProducts[];
  Categories:Category[];
  productParameter:ProductParameter=new ProductParameter();
  @ViewChild('search') SearchValue:ElementRef;
  @ViewChild('CategoryIdValue') CategoryIdvalue:ElementRef;
  constructor(private shopservice:ShopServiceService,private toater:ToastrService ){}
  
  GetProducts(productParameter){
    this.shopservice.getProduct(productParameter).subscribe({
      next: (res:IPagination) => {
        console.log(res);
        this.Products = res.entities;
        this.productParameter.totalRecord=res.totalCount;
        this.productParameter.PageNumber=res.pageNumber;
        this.productParameter.PageSize=res.pageSize;
        this.toater.success(res.message);
      }
    })
  }
  // GetCategory

  GetCategory(){
    this.shopservice.getCategory().subscribe({
      next: (res:IPaginationCategory) => {
        console.log(res);
        this.Categories = res.entities;
      }
    });
  }

  selectedIds(CategoryId:number){
 this.productParameter.CategoryId = CategoryId;
  this.GetProducts(this.productParameter);
  }
  ngOnInit(): void {
    this.GetProducts(this.productParameter);
    this.GetCategory();
  }
  SortPrice(sort:Event){
    this.productParameter.sort=(sort.target as HTMLInputElement).value;
   this.GetProducts(this.productParameter);
  }
 Price=[
  {Name:"Price",value:""},
  {Name:"Max-Price",value:"PriceDsc"},
  {Name:"Min-Price",value:"PriceAsn"},]

  // Search
 search:string
  Search(value:string){
    debugger;
    this.productParameter.search=value;
    this.GetProducts(this.productParameter);
  }
  Reset(){
    debugger
    this.productParameter.CategoryId=undefined;
    this.productParameter.sort=''
    this.productParameter.search='';
    this.SearchValue.nativeElement.value='';
    this.CategoryIdvalue.nativeElement.value=0;
    this.GetProducts(this.productParameter);
  }
  // Pagaination
  OnChangePage(event:any):void{
    debugger;
   this.productParameter.PageNumber=event;
   this.GetProducts(this.productParameter);
  }
}
