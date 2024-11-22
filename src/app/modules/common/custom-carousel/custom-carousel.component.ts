import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss']

})
export class CustomCarouselComponent {

  images = [
    { src: 'https://rukminim2.flixcart.com/fk-p-flap/1600/710/image/377cbdda313b02eb.jpeg?q=20', alt: 'Image 1' },
    { src: 'https://rukminim2.flixcart.com/fk-p-flap/1600/710/image/27f1586f7ff2e6af.jpg?q=20', alt: 'Image 2' },
    { src: 'https://rukminim2.flixcart.com/fk-p-flap/1600/710/image/a54a1b8b517c95c3.jpeg?q=20', alt: 'Image 3' }
  ];

  ngOnInit(): void {

  }

}
