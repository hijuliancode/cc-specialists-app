import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarRatingModule } from 'angular-star-rating';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    StarRatingModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FontAwesomeModule,
    StarRatingModule
  ]
})
export class SharedModule { }
