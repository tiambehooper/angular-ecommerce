import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cartItem: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.listCartDetails();
  }

  listCartDetails() {
    //get a handele to the cart items
    this.cartItem = this.cartService.cartItems;

    //subscribe to the cart totalPrice
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data

    );

    //subscribe to the cart totalQuantity
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );

    // compute cart  total price and quntitiy
    this.cartService.computeCartTotals();

  }

  incrementQuantity(theCartItem: CartItem){
    this.cartService.addToCart(theCartItem);
  }

  decrementQuantity(theCartItem: CartItem){

    this.cartService.decrementQuantity(theCartItem);

  }
  remove(theCartItem: CartItem){
    this.cartService.remove(theCartItem);

  }

}
