import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/product';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrls: ['./product-category-menu.component.css']
})
export class ProductCategoryMenuComponent implements OnInit {

  ProductCategories: ProductCategory[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.listProductCategories();
  }
  listProductCategories() {
    this.productService.getProductCategories().subscribe(
       ( data: ProductCategory[]) => {
        console.log('Product Categories=' + JSON.stringify(data));
        this.ProductCategories = data;
      }
    );
  }

}
