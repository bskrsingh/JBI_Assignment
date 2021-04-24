import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './view/banner.component'; 
import { OwlModule } from 'ngx-owl-carousel';  



@NgModule({
  declarations: [
    BannerComponent
  ],
  imports: [
    CommonModule,OwlModule
  ],
  exports: [BannerComponent]
})
export class BannerModule { }
