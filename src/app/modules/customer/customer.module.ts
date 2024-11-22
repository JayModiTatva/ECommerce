import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { SharedModule } from '../common/shared.module';
import { CategoryListComponent } from './category-list/category-list.component';



@NgModule({
  declarations: [
    CartComponent,
    FooterComponent,
    HeaderComponent,
    ProductListComponent,
    ProductDetailComponent,
    CheckoutComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CustomerRoutingModule,
  ],
})
export class CustomerModule { }
