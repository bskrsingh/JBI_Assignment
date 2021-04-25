import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './view/home.component';
import { HeaderModule } from '../layout-shared/header/header.module';
import { FooterModule } from '../layout-shared/footer/footer.module';
import { RouterModule, Routes } from '@angular/router';
import { BannerModule } from '../layout-shared/banner/banner.module';
import { ClientModule } from '../layout-shared/client/client.module';
import { WorkedWithModule } from '../layout-shared/workedwith/worked-with.module';

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
    ClientModule,
    WorkedWithModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
