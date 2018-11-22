import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../Shared/services/product.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  id: number;
  productForm = new FormGroup({
    name: new FormControl(''),
    desc: new FormControl(''),
    price: new FormControl(''),
    type: new FormControl(''),
    imageLink: new FormControl('')
  });

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(this.id)
      .subscribe( productFromRest => {
        this.productForm.patchValue( {
          name: productFromRest.name,
          desc: productFromRest.desc,
          price: productFromRest.price,
          type: productFromRest.type,
          imageLink: productFromRest.imageLink
      });
    });
  }

  updateProduct() {
    const product = this.productForm.value;
    product.id = this.id;
    this.productService.updateProduct(product)
      .subscribe(updatedProduct => {
        this.router.navigateByUrl('/products');
      })
    this.productForm.reset();
  }
}
