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
  Product:IProducts;
 constructor(private shopservice: ShopServiceService, private route:ActivatedRoute) { }
  ngOnInit(): void {
   var id=this.route.snapshot.paramMap.get('id');
   console.log(id);
   this.shopservice.GetProductById(parseInt(id)).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.Product=res.entity;
      }
    })
  }

 


}
