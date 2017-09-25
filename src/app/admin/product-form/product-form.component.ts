import { ProductService } from '../../service/product.service';
import { CategoryService } from '../../service/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  categories$;

  constructor(categoryService: CategoryService, private productSercice: ProductService) {
    this.categories$ = categoryService.getCategories();
   }

  save(product){
    this.productSercice.create(product)
  }

}
