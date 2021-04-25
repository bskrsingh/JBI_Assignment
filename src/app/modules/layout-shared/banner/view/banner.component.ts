import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  Images = ['../assets/images/hero_1.jpg', '../assets/images/hero_2.jpg', '../assets/images/hero_3.jpg'];  
  
  SlideOptions ={
    items: 1,
    loop: true,
    stagePadding: 0,
    margin: 0,
    autoplay: true,
    animateOut: 'slideOutDown',
    animateIn: 'fadeIn',
    pauseOnHover: false,
    nav: false,
    navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">']
  } 
  
  //CarouselOptions = { items: 3, dots: true, nav: true }; 

  constructor() { }

  ngOnInit(): void {
  }

}
