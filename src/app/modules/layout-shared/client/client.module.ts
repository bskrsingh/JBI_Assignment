import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './view/client.component';


@NgModule({
  declarations: [
    ClientComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ClientComponent
  ]
})
export class ClientModule { }
