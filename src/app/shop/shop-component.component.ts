import { Component, OnInit } from '@angular/core';
import { ShopServiceService } from './shop-service.service';
import { Category, IProducts } from '../../Models/IProducts';
import { IPagination, IPaginationCategory } from '../../Models/IPagination';

@Component({
  selector: 'app-shop-component',
  templateUrl: './shop-component.component.html',
  styleUrl: './shop-component.component.scss'
})
export class ShopComponentComponent implements OnInit {
  Products:IProducts[];
  Categories:Category[];
  CategoryId:number;
  selectPrice:string;
  constructor(private shopservice:ShopServiceService ){}
  
  GetProducts(CategoryId,sort){
    this.shopservice.getProduct(CategoryId,sort).subscribe({
      next: (res:IPagination) => {
        console.log(res);
        this.Products = res.entities;
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
  this.CategoryId = CategoryId;
  this.GetProducts(CategoryId,this.SortPrice);
  }
  ngOnInit(): void {
    this.GetProducts(this.CategoryId,this.SortPrice);
    this.GetCategory();
  }
  SortPrice(sort:Event){
    this.selectPrice=(sort.target as HTMLInputElement).value;
   this.GetProducts(this.CategoryId,this.selectPrice);
  }
 Price=[
  {Name:"Price",value:""},
  {Name:"Max-Price",value:"PriceDesc"},
  {Name:"Min-Price",value:"PriceAsc"},
]
}
