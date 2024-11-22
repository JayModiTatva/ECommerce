import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  productId: number;
  product: any;
  products = [
    {
      id: 1,
      name: 'Deluxe Gaming Chair',
      price: 299,
      description: 'Experience unmatched comfort and support with this ergonomic gaming chair, designed for long hours of play or work.',
      imageUrl: 'https://via.placeholder.com/800x500',
    },
    {
      id: 2,
      name: '4K Ultra HD Monitor',
      price: 499,
      description: 'Immerse yourself in stunning visuals with this 32-inch 4K Ultra HD monitor, featuring vibrant colors and sharp details.',
      imageUrl: 'https://via.placeholder.com/800x500',
    },
  ];

  constructor(private route: ActivatedRoute) {
    this.productId = this.route.snapshot.params['id'];
    this.product = this.products.find(p => p.id === +this.productId);
  }
}
