import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [HomeComponent, CarouselComponent],
  imports: [CommonModule, CarouselModule.forRoot(), HomeRoutingModule],
})
export class HomeModule {}
