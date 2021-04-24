import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './view/home.component';
import { HeaderModule } from '../layout-shared/header/header.module';
import { FooterModule } from '../layout-shared/footer/footer.module';
import { RouterModule, Routes } from '@angular/router';
import { BannerModule } from '../layout-shared/banner/banner.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    BannerModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
