import { ShoppingCartService } from './../shopping-cart.service';
import { Observable } from 'rxjs';
import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import "firebase/auth";
import "firebase/firestore";
import { ShoppingCart } from '../models/shopping-cart';
import { faPhoneAlt,faHome,faShoppingCart,faSignInAlt } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appUser!: AppUser;
  cart$: Observable<ShoppingCart>|any;

  faPhoneAlt = faPhoneAlt;
  faHome = faHome;
  faShoppingCart = faShoppingCart;
  faSignInAlt = faSignInAlt;



  constructor(private auth: AuthService, private shoppingCartService: ShoppingCartService) {
    
   }

   async ngOnInit() {

    this.auth.appUser$.subscribe(appUser => this.appUser = appUser!);

    this.cart$ = await this.shoppingCartService.getCart();
   
   }

  logout() {
    this.auth.logout();
    
  }

}
