import { ShoppingCart } from './../models/shopping-cart';
import { Observable } from 'rxjs-compat';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnDestroy, OnInit } from '@angular/core';  
import { ActivatedRoute } from '@angular/router';  
import { Product } from '../models/product';  
import { ProductService } from '../product.service';  
import { switchMap } from 'rxjs/operators';  
import { Subscription } from 'rxjs'; 
  
@Component({  
  selector: 'app-products',  
  templateUrl: './products.component.html',  
  styleUrls: ['./products.component.css']  
})  
export class ProductsComponent implements OnInit {  
  products: Product[]=[];  
  filteredProducts:Product[]=[];  
  category: string|null|undefined; 
  cart$:Observable<ShoppingCart>; 

 
  
  constructor(  
    private route:ActivatedRoute,  
    private productService:ProductService,
    private shoppingCartService: ShoppingCartService,
    )  
    {  
   }  

  async ngOnInit() {

    this.cart$ = await this.shoppingCartService.getCart();
    this.populateProducts();
      
  }

  private populateProducts() {

    this.productService  
    .getAll()  
    .pipe(  
        switchMap((products: Product[]) => {  
            this.products = products;  
            return this.route.queryParamMap;  
        })  
    )  
    .subscribe((params) => {  
        this.category = params.get('category');  
        this.applyFilter();
      
    });

  }
  
  private applyFilter() {
    this.filteredProducts = this.category  
    ? this.products.filter((p) => p.category === this.category)  
    : this.products;  

  }
  
}