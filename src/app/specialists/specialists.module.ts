import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialistsRoutingModule } from './specialists-routing.module';
import { SpecialistsComponent } from './components/specialists/specialists.component';
import { SpecialistComponent } from './components/specialist/specialist.component';
import { SpecialistDetailComponent } from './components/specialist-detail/specialist-detail.component';


@NgModule({
  declarations: [SpecialistsComponent, SpecialistComponent, SpecialistDetailComponent],
  imports: [
    CommonModule,
    SpecialistsRoutingModule
  ]
})
export class SpecialistsModule { }
