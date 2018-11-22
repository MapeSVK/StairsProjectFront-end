import { Component, OnInit } from '@angular/core';
import {Product} from '../../Shared/Models/product';
import {ProductService} from '../../Shared/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
// USES DATA FROM SERVICE
  products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.productService.getProducts()
      .subscribe(listOfProducts => {
        this.products = listOfProducts;
      });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id)
      .subscribe(message => {
        console.log('Delete product, got message: ' + message);
        // this.refresh();
      });
  }
}
