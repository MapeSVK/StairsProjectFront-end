import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../Shared/services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productForm = new FormGroup({
    name: new FormControl(''),
    desc: new FormControl(''),
    price: new FormControl(''),
    type: new FormControl(''),
    imageLink: new FormControl('')
  });

  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit() {
  }

  saveProduct() {
    const product = this.productForm.value;
    this.productService.addProduct(product)
      .subscribe(addedProduct => {
        this.router.navigateByUrl('/products');
      });
  }

}
