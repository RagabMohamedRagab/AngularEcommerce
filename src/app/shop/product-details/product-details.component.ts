import { Component, OnInit } from '@angular/core';
import { ShopServiceService } from '../../../Services/shop-service.service';
import { IProducts } from '../../../Models/IProducts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  product:IProducts;
  MainImage:string;
 constructor(private shopservice: ShopServiceService, private route:ActivatedRoute) { }
  ngOnInit(): void {
   var id=this.route.snapshot.paramMap.get('id');
   console.log(id);
   debugger
   this.shopservice.GetProductById(parseInt(id)).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.product=res.entity;
        this.MainImage=this.product.productPhotos[0].imageName;
      }
    })

  }
  
    ReplaceImage(src:string){
      this.MainImage=src;
    }

 


}
