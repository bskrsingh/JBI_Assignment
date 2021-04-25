import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './view/slider.component'

import { OwlModule } from 'ngx-owl-carousel';  

@NgModule({
  declarations: [SliderComponent],
  imports: [
    CommonModule,OwlModule
  ],
  exports:[
    SliderComponent
  ]
})
export class SliderModule { }
