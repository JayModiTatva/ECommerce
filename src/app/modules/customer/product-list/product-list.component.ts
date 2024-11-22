import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../common/shared.module';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  productId: number;
  product: any;
  products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
  ];

  constructor(private route: ActivatedRoute) {
    this.productId = this.route.snapshot.params['id'];
    this.product = this.products.find((p) => p.id === +this.productId);
  }
}
