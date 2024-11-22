import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCarouselComponent } from './custom-carousel/custom-carousel.component';
// import { RouterLink, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CustomCarouselComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    // RouterLink,
    // RouterModule
  ],
  exports: [
    CommonModule,
    CustomCarouselComponent,
    // RouterModule,
    // RouterLink
  ]
})
export class SharedModule { }
