import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workedwith',
  templateUrl: './workedwith.component.html',
  styleUrls: ['./workedwith.component.scss']
})
export class WorkedwithComponent implements OnInit {
  Images = ['../assets/images/hero_1.jpg', '../assets/images/hero_2.jpg', '../assets/images/hero_3.jpg',
  '../assets/images/hero_1.jpg', '../assets/images/hero_2.jpg', '../assets/images/hero_3.jpg',
  '../assets/images/hero_1.jpg', '../assets/images/hero_2.jpg', '../assets/images/hero_3.jpg']; 
  SlideOptions = {
    autoplay: true,
    rewind: true, /* use rewind if you don't want loop */
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
      0: {
        items: 3
      },
  
      600: {
        items: 4
      },
  
      1024: {
        items: 7
      },
  
      1366: {
        items: 7
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
