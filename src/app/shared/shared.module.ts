import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarRatingModule } from 'angular-star-rating';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    StarRatingModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    StarRatingModule
  ]
})
export class SharedModule { }
