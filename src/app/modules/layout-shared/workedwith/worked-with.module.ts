import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkedwithComponent } from './view/workedwith.component'
import { OwlModule } from 'ngx-owl-carousel';  
@NgModule({
  declarations: [WorkedwithComponent],
  imports: [
    CommonModule,
    OwlModule
  ],
  exports:[
    WorkedwithComponent
  ]
})
export class WorkedWithModule { }
