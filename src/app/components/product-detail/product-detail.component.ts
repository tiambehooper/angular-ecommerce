import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartItem } from 'src/app/common/cart-item';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product!: Product;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handelProductDetails();
    });
  }
  handelProductDetails() {
    // get the "id" param string. convert to number
    const theProductId: number = +this.route.snapshot.paramMap.get('id')!;
    this.productService
      .getProduct(theProductId)
      .subscribe((data: any): void => {
        this.product = data;
      });
  }

  addToCart() {
    console.log(
      `Adding to cart: ${this.product.name}, ${this.product.unitPrice}`
    );
    const theCartItem = new CartItem(this.product);
    this.cartService.addToCart(theCartItem);
  }
}

// listProductCategories() {
//   this.productService.getProductCategories().subscribe(
//      ( data: ProductCategory[]) => {
//       console.log('Product Categories=' + JSON.stringify(data));
//       this.ProductCategories = data;
//     }
//   );
// }
