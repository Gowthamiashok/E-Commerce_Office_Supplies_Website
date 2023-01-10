import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit  {
  cart$:any;

  constructor(private shoppingCartService: ShoppingCartService) { 
    
  }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();

  }

  clearCart() {
    if(!confirm("Are you sure you want to clear the Shopping Cart?")) return;
    this.shoppingCartService.clearCart();
  }

 
}